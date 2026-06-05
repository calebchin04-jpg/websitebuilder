'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwitcherStore } from '@/lib/store';
import { audio } from '@/lib/audio';
import { DealPost as DealPostType } from '@/lib/supabaseClient';
import DealPost from './DealPost';

type Filter = 'all' | 'discount' | 'event' | 'freebie' | 'saved';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all',      label: 'All' },
  { key: 'discount', label: 'Discounts' },
  { key: 'event',    label: 'Events' },
  { key: 'freebie',  label: 'Freebies' },
  { key: 'saved',    label: 'Saved' },
];

const EMAIL_KEY = 'crossroads_voter_email';

export default function DealsFeed() {
  const { openSwitcher } = useSwitcherStore();
  const [posts, setPosts]         = useState<DealPostType[]>([]);
  const [loading, setLoading]     = useState(true);
  const [filter, setFilter]       = useState<Filter>('all');
  const [savedIds, setSavedIds]   = useState<string[]>([]);       // post IDs saved by this user
  const [email, setEmail]         = useState<string>('');
  const [emailModal, setEmailModal] = useState(false);
  const [pendingSave, setPendingSave] = useState<string | null>(null); // post ID awaiting email
  const [emailInput, setEmailInput] = useState('');
  const [emailError, setEmailError] = useState('');

  // Load email from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(EMAIL_KEY) ?? '';
    setEmail(stored);
  }, []);

  // Fetch posts
  useEffect(() => {
    fetch('/api/posts')
      .then(r => r.json())
      .then(data => { setPosts(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // Load saved IDs from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('crossroads_saved_posts');
    if (stored) setSavedIds(JSON.parse(stored));
  }, []);

  const persistSaved = (ids: string[]) => {
    setSavedIds(ids);
    localStorage.setItem('crossroads_saved_posts', JSON.stringify(ids));
  };

  const toggleSave = useCallback(async (postId: string, isSaved: boolean) => {
    const resolvedEmail = email || localStorage.getItem(EMAIL_KEY) || '';

    if (!resolvedEmail) {
      setPendingSave(postId);
      setEmailModal(true);
      return;
    }

    const next = isSaved ? savedIds.filter(id => id !== postId) : [...savedIds, postId];
    persistSaved(next);

    await fetch(`/api/posts/${postId}/save`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ voter_email: resolvedEmail, saved: !isSaved }),
    });
  }, [email, savedIds]);

  const handleEmailSubmit = async () => {
    if (!emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError('Please enter a valid email.');
      return;
    }
    localStorage.setItem(EMAIL_KEY, emailInput);
    setEmail(emailInput);
    setEmailModal(false);

    if (pendingSave) {
      const isSaved = savedIds.includes(pendingSave);
      const next = isSaved ? savedIds.filter(id => id !== pendingSave) : [...savedIds, pendingSave];
      persistSaved(next);
      await fetch(`/api/posts/${pendingSave}/save`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ voter_email: emailInput, saved: !isSaved }),
      });
      setPendingSave(null);
    }
    setEmailInput('');
    setEmailError('');
  };

  const visible = posts.filter(p => {
    if (filter === 'all')   return true;
    if (filter === 'saved') return savedIds.includes(p.id);
    return p.deal_type === filter;
  });

  return (
    <motion.div
      style={{ minHeight: '100vh', background: '#F4ECD8', paddingBottom: 80 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >

      {/* Fixed nav bar — CROSSROADS left, auth right */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between"
        style={{ paddingLeft: 56, paddingRight: 56, paddingTop: 28, paddingBottom: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* CROSSROADS logo — opens switcher */}
        <div
          className="flex items-center gap-3 relative select-none cursor-pointer"
          onClick={() => { audio.playChirp(); openSwitcher(0); }}
        >
          <motion.div
            aria-hidden
            style={{
              position:      'absolute',
              inset:         '-10px -20px',
              borderRadius:  12,
              border:        '1.5px solid #1F4E3D',
              boxShadow:     '0 0 8px 1px rgba(31,78,61,0.3)',
              pointerEvents: 'none',
            }}
            animate={{ scale: [1, 1.9], opacity: [0.7, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut', repeatDelay: 2.0 }}
          />
          <span className="relative flex h-[7px] w-[7px] shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ background: '#1F4E3D' }} />
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full"
              style={{ background: '#1F4E3D' }} />
          </span>
          <motion.span
            className="text-[22px] font-bold leading-none tracking-[0.18em]"
            style={{ color: '#1F4E3D' }}
            whileHover={{ opacity: 0.55 }}
            transition={{ duration: 0.15 }}
          >
            CROSSROADS
          </motion.span>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <a
            href="/merchant/login"
            style={{ fontSize: 13, fontWeight: 500, color: 'rgba(42,31,20,0.55)', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#2A1F14')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(42,31,20,0.55)')}
          >
            Sign in
          </a>
          <a
            href="/merchant/login"
            style={{
              fontSize: 13, fontWeight: 600, color: '#FBF6E9',
              background: '#1F4E3D', textDecoration: 'none',
              padding: '8px 18px', borderRadius: 999,
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#2A6651')}
            onMouseLeave={e => (e.currentTarget.style.background = '#1F4E3D')}
          >
            Get started
          </a>
        </div>
      </motion.div>

      {/* Header */}
      <div style={{ paddingTop: 100, paddingBottom: 32, paddingLeft: 24, paddingRight: 24, maxWidth: 600, margin: '0 auto' }}>
        <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#1F4E3D', fontWeight: 700, marginBottom: 8 }}>
          Markham · Local
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: '#2A1F14', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
          Local Deals
        </h1>
        <p style={{ fontSize: 14, color: 'rgba(42,31,20,0.5)', marginTop: 8, lineHeight: 1.6 }}>
          Fresh offers from businesses in your community.
        </p>
      </div>

      {/* Filter row */}
      <div style={{
        display: 'flex', gap: 8, overflowX: 'auto', paddingLeft: 24, paddingRight: 24,
        paddingBottom: 24, maxWidth: 600, margin: '0 auto',
        msOverflowStyle: 'none', scrollbarWidth: 'none',
      }}>
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              padding:      '7px 16px',
              borderRadius: 20,
              border:       '1px solid',
              borderColor:  filter === f.key ? '#1F4E3D' : 'rgba(42,31,20,0.15)',
              background:   filter === f.key ? '#1F4E3D' : 'transparent',
              color:        filter === f.key ? '#FBF6E9' : 'rgba(42,31,20,0.6)',
              fontSize:     13,
              fontWeight:   filter === f.key ? 600 : 400,
              cursor:       'pointer',
              whiteSpace:   'nowrap',
              transition:   'all 0.15s',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {loading && (
          <p style={{ textAlign: 'center', color: 'rgba(42,31,20,0.4)', fontSize: 14, paddingTop: 40 }}>
            Loading deals…
          </p>
        )}
        {!loading && visible.length === 0 && (
          <div style={{ textAlign: 'center', paddingTop: 60 }}>
            <p style={{ fontSize: 32, marginBottom: 12 }}>🛍️</p>
            <p style={{ fontSize: 15, color: 'rgba(42,31,20,0.5)' }}>
              {filter === 'saved' ? 'No saved deals yet.' : 'No deals here yet.'}
            </p>
          </div>
        )}
        <AnimatePresence mode="popLayout">
          {visible.map(post => (
            <DealPost
              key={post.id}
              post={post}
              savedEmails={savedIds}
              onSaveToggle={toggleSave}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Email gate modal */}
      <AnimatePresence>
        {emailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 24,
            }}
            onClick={() => setEmailModal(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 16 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: '#FBF6E9', borderRadius: 20, padding: 32,
                width: '100%', maxWidth: 380,
                boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
              }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#2A1F14', marginBottom: 8 }}>
                Save this deal
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(42,31,20,0.55)', marginBottom: 24, lineHeight: 1.6 }}>
                Enter your email to bookmark deals and we'll keep you in the loop.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                value={emailInput}
                onChange={e => { setEmailInput(e.target.value); setEmailError(''); }}
                onKeyDown={e => e.key === 'Enter' && handleEmailSubmit()}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: 10, fontSize: 15,
                  border: `1px solid ${emailError ? '#E85C4A' : 'rgba(42,31,20,0.18)'}`,
                  background: 'white', color: '#2A1F14', outline: 'none',
                  boxSizing: 'border-box', marginBottom: emailError ? 6 : 16,
                }}
              />
              {emailError && (
                <p style={{ fontSize: 12, color: '#E85C4A', marginBottom: 12 }}>{emailError}</p>
              )}
              <button
                onClick={handleEmailSubmit}
                style={{
                  width: '100%', padding: '13px 0', background: '#1F4E3D',
                  color: '#FBF6E9', fontWeight: 700, fontSize: 15, borderRadius: 10,
                  border: 'none', cursor: 'pointer',
                }}
              >
                Save Deal →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
