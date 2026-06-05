'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { DealPost } from '@/lib/supabaseClient';

type DealType = 'discount' | 'event' | 'freebie' | 'announcement';

const TYPES: { key: DealType; label: string; color: string }[] = [
  { key: 'discount',     label: 'Discount',     color: '#1F4E3D' },
  { key: 'event',        label: 'Event',        color: '#1A3D5C' },
  { key: 'freebie',      label: 'Freebie',      color: '#7A4500' },
  { key: 'announcement', label: 'Announcement', color: '#2A1F14' },
];

interface Props {
  businessId: string;
  isDark: boolean;
  onPosted: (post: DealPost) => void;
}

export default function PostComposer({ businessId, isDark, onPosted }: Props) {
  const [content, setContent]     = useState('');
  const [dealType, setDealType]   = useState<DealType>('announcement');
  const [expiresAt, setExpiresAt] = useState('');
  const [imageUrl, setImageUrl]   = useState('');
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]     = useState(false);
  const [error, setError]         = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const cardBg  = isDark ? '#0C0C0C' : '#FFFFFF';
  const border  = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
  const textCol = isDark ? '#EFEFEF' : '#2A1F14';
  const mutedCol = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(42,31,20,0.45)';
  const inputBg = isDark ? 'rgba(255,255,255,0.05)' : '#FAFAFA';
  const inputBorder = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';

  async function handleImageUpload(file: File) {
    setUploading(true);
    setError('');
    const ext  = file.name.split('.').pop();
    const path = `deals/${Date.now()}.${ext}`;
    const { error: uploadErr } = await supabase.storage
      .from('deal-images')
      .upload(path, file, { upsert: true });

    if (uploadErr) { setError('Image upload failed.'); setUploading(false); return; }

    const { data } = supabase.storage.from('deal-images').getPublicUrl(path);
    setImageUrl(data.publicUrl);
    setUploading(false);
  }

  async function handleSubmit() {
    if (!content.trim()) { setError('Add a deal description.'); return; }
    setSubmitting(true);
    setError('');

    const res = await fetch('/api/posts', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({
        business_id: businessId,
        content:     content.trim(),
        image_url:   imageUrl || undefined,
        deal_type:   dealType,
        expires_at:  expiresAt || undefined,
      }),
    });

    const data = await res.json();
    setSubmitting(false);

    if (!res.ok) { setError(data.error ?? 'Something went wrong.'); return; }
    onPosted(data);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setContent('');
      setImageUrl('');
      setExpiresAt('');
      setDealType('announcement');
    }, 2000);
  }

  return (
    <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 16, padding: 24 }}>
      <h3 style={{ fontSize: 14, fontWeight: 600, color: textCol, marginBottom: 16, letterSpacing: '0.02em' }}>
        New Deal Post
      </h3>

      {/* Deal type selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        {TYPES.map(t => (
          <button
            key={t.key}
            onClick={() => setDealType(t.key)}
            style={{
              padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600,
              border: `1px solid ${dealType === t.key ? t.color : inputBorder}`,
              background: dealType === t.key ? t.color : 'transparent',
              color: dealType === t.key ? '#FBF6E9' : mutedCol,
              cursor: 'pointer', transition: 'all 0.15s',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content textarea */}
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Write your deal or announcement…"
        maxLength={280}
        rows={3}
        style={{
          width: '100%', padding: '12px 14px', borderRadius: 10, fontSize: 14,
          border: `1px solid ${inputBorder}`, background: inputBg,
          color: textCol, resize: 'none', outline: 'none',
          fontFamily: 'inherit', lineHeight: 1.55, boxSizing: 'border-box',
          marginBottom: 8,
        }}
      />
      <p style={{ fontSize: 11, color: mutedCol, marginBottom: 14, textAlign: 'right' }}>
        {content.length}/280
      </p>

      {/* Image upload */}
      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }}
        onChange={e => e.target.files?.[0] && handleImageUpload(e.target.files[0])} />

      {imageUrl ? (
        <div style={{ position: 'relative', marginBottom: 14 }}>
          <img src={imageUrl} alt="Preview" style={{ width: '100%', maxHeight: 160, objectFit: 'cover', borderRadius: 10 }} />
          <button
            onClick={() => setImageUrl('')}
            style={{
              position: 'absolute', top: 8, right: 8,
              background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none',
              borderRadius: '50%', width: 24, height: 24, cursor: 'pointer', fontSize: 12,
            }}
          >✕</button>
        </div>
      ) : (
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          style={{
            width: '100%', padding: '10px 0', borderRadius: 10, fontSize: 13,
            border: `1px dashed ${inputBorder}`, background: 'transparent',
            color: mutedCol, cursor: 'pointer', marginBottom: 14,
          }}
        >
          {uploading ? 'Uploading…' : '+ Add image (optional)'}
        </button>
      )}

      {/* Expiry date */}
      <div style={{ marginBottom: 16 }}>
        <label style={{ fontSize: 12, color: mutedCol, display: 'block', marginBottom: 6 }}>
          Expires (optional)
        </label>
        <input
          type="date"
          value={expiresAt}
          onChange={e => setExpiresAt(e.target.value)}
          style={{
            padding: '9px 12px', borderRadius: 8, fontSize: 13,
            border: `1px solid ${inputBorder}`, background: inputBg,
            color: textCol, outline: 'none', fontFamily: 'inherit',
          }}
        />
      </div>

      {error && <p style={{ fontSize: 12, color: '#E85C4A', marginBottom: 10 }}>{error}</p>}

      <motion.button
        onClick={handleSubmit}
        disabled={submitting || success}
        whileTap={{ scale: 0.97 }}
        style={{
          width: '100%', padding: '12px 0',
          background: success ? '#1F4E3D' : '#1F4E3D',
          color: '#FBF6E9', fontWeight: 700, fontSize: 14,
          borderRadius: 10, border: 'none', cursor: submitting ? 'wait' : 'pointer',
          opacity: submitting ? 0.7 : 1,
        }}
      >
        {success ? '✓ Posted!' : submitting ? 'Posting…' : 'Post Deal →'}
      </motion.button>
    </div>
  );
}
