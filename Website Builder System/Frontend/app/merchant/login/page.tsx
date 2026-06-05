'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function MerchantLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // In a real scenario, this connects to Supabase auth.
    // For MVP demonstration, if email is 'demo@merchant.com' we bypass.
    if (email === 'demo@merchant.com' && password === 'demo123') {
      setTimeout(() => router.push('/merchant'), 500);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/merchant');
    }
  };

  return (
    <div className="heritage-light min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans" style={{ background: '#F4ECD8' }}>
      {/* Background — soft forest wash bottom + brass wash left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(31,78,61,0.14) 0%, rgba(31,78,61,0.04) 45%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 35% 45% at 0% 50%, rgba(184,120,46,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Paper grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '220px 220px',
        }}
      />

      <div className="relative w-full max-w-sm z-10">
        <div className="text-center mb-8">
          <p className="text-[9px] tracking-[0.45em] uppercase font-semibold text-[rgba(42,31,20,0.5)] mb-3">
            Crossroads · Markham
          </p>
          <h1 className="text-2xl font-display font-bold text-[#2A1F14] mb-2">
            Merchant Portal
          </h1>
          <p className="text-sm text-[rgba(42,31,20,0.62)]">
            Sign in to manage your growth
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-4 bg-[#FBF6E9] p-8 rounded-2xl border border-[rgba(42,31,20,0.12)] shadow-[0_20px_50px_-15px_rgba(31,78,61,0.18)]"
        >
          {error && (
            <div className="p-3 mb-4 rounded bg-[rgba(192,89,79,0.08)] border border-[rgba(192,89,79,0.25)] text-[#8B2E2E] text-xs text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[rgba(42,31,20,0.55)] uppercase mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@pinnacle.com"
              className="w-full px-4 py-3 bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-xl text-sm text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:outline-none focus:border-[#1F4E3D] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-[10px] tracking-[0.2em] text-[rgba(42,31,20,0.55)] uppercase mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#FFFCF2] border border-[rgba(42,31,20,0.15)] rounded-xl text-sm text-[#2A1F14] placeholder-[rgba(42,31,20,0.32)] focus:outline-none focus:border-[#1F4E3D] transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 mt-4 bg-[#1F4E3D] text-[#FBF6E9] font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#2A6651] hover:shadow-[0_12px_32px_rgba(31,78,61,0.25)] transition-all disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>

          <div className="text-center mt-6">
            <p className="text-[10px] text-[rgba(42,31,20,0.5)]">
              Demo Access: demo@merchant.com / demo123
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
