'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DealPost as DealPostType } from '@/lib/supabaseClient';

const BADGE: Record<string, { label: string; color: string; bg: string }> = {
  discount:     { label: 'Discount',     color: '#1F4E3D', bg: 'rgba(31,78,61,0.1)' },
  event:        { label: 'Event',        color: '#1A3D5C', bg: 'rgba(26,61,92,0.1)' },
  freebie:      { label: 'Freebie',      color: '#7A4500', bg: 'rgba(184,120,46,0.12)' },
  announcement: { label: 'Announcement', color: '#2A1F14', bg: 'rgba(42,31,20,0.08)' },
};

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1)  return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

function isExpired(expires_at?: string) {
  if (!expires_at) return false;
  return new Date(expires_at) < new Date();
}

interface Props {
  post: DealPostType;
  savedEmails: string[];
  onSaveToggle: (postId: string, currentlySaved: boolean) => void;
}

export default function DealPost({ post, savedEmails, onSaveToggle }: Props) {
  const [imgError, setImgError] = useState(false);
  const badge = BADGE[post.deal_type] ?? BADGE.announcement;
  const expired = isExpired(post.expires_at);
  const isSaved = savedEmails.includes(post.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background:   '#FFFFFF',
        borderRadius: 16,
        border:       '1px solid rgba(42,31,20,0.08)',
        overflow:     'hidden',
        opacity:      expired ? 0.5 : 1,
      }}
    >
      {/* Business row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {post.business?.logo_url ? (
            <img
              src={post.business.logo_url}
              alt={post.business.name}
              style={{ width: 32, height: 32, borderRadius: 8, objectFit: 'cover' }}
            />
          ) : (
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'rgba(31,78,61,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 700, color: '#1F4E3D',
            }}>
              {post.business?.name?.[0] ?? '?'}
            </div>
          )}
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#2A1F14', lineHeight: 1.2 }}>
              {post.business?.name ?? 'Local Business'}
            </p>
            <p style={{ fontSize: 11, color: 'rgba(42,31,20,0.4)', marginTop: 1 }}>
              {timeAgo(post.created_at)}
              {expired && ' · Expired'}
            </p>
          </div>
        </div>

        {/* Bookmark */}
        <motion.button
          onClick={() => onSaveToggle(post.id, isSaved)}
          whileTap={{ scale: 0.88 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, lineHeight: 1 }}
          title={isSaved ? 'Remove bookmark' : 'Save deal'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={isSaved ? '#1F4E3D' : 'none'}
            stroke={isSaved ? '#1F4E3D' : 'rgba(42,31,20,0.3)'} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
        </motion.button>
      </div>

      {/* Image */}
      {post.image_url && !imgError && (
        <img
          src={post.image_url}
          alt="Deal"
          onError={() => setImgError(true)}
          style={{ width: '100%', maxHeight: 240, objectFit: 'cover', display: 'block' }}
        />
      )}

      {/* Content */}
      <div style={{ padding: '14px 20px 16px' }}>
        <p style={{ fontSize: 15, color: '#2A1F14', lineHeight: 1.6, marginBottom: 12 }}>
          {post.content}
        </p>

        {/* Footer row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', padding: '3px 10px', borderRadius: 20,
            color: badge.color, background: badge.bg,
          }}>
            {badge.label}
          </span>

          {post.expires_at && !expired && (
            <span style={{ fontSize: 11, color: 'rgba(42,31,20,0.45)' }}>
              · Ends {new Date(post.expires_at).toLocaleDateString('en-CA', { month: 'short', day: 'numeric' })}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
