'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import { DealPost } from '@/lib/supabaseClient';
import ImpactReport from '@/components/merchant/ImpactReport';
import UpsellModule from '@/components/merchant/UpsellModule';
import PostComposer from '@/components/deals/PostComposer';

// Fixed UUID seeded by scripts/setup.sql — matches the row in the businesses table
const DEMO_BUSINESS_ID = 'e8f9a0b1-c2d3-4e5f-a6b7-c8d9e0f1a2b3';

type Tab = 'overview' | 'deals';

export default function MerchantDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [myPosts, setMyPosts] = useState<DealPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Simple client side auth check
    const checkUser = async () => {
      // In MVP demo, if they directly route here, we let them view it to show the features,
      // but in production we'd enforce session:
      /*
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/merchant/login');
      } else {
        setLoading(false);
      }
      */
      setLoading(false);
    };
    checkUser();
  }, [router]);

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white text-xs tracking-widest uppercase">Loading...</div>;

  const bgClass = isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#F5F5F7] text-gray-900';
  const headerClass = isDarkMode ? 'border-white/10 bg-black/50' : 'border-black/10 bg-white/50';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bgClass} font-sans`}>
      {/* Top Navbar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b ${headerClass} px-8 py-4 flex justify-between items-center`} style={{ gap: 16 }}>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-slate-dark to-[#00FFFF] flex items-center justify-center text-black font-bold select-none">
            P
          </div>
          <div>
            <h1 className="font-display font-semibold text-sm">Pinnacle Realty Group</h1>
            <p className="text-[10px] uppercase tracking-widest opacity-50">Premium Tier Merchant</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Tab switcher */}
          <div className={`flex items-center rounded-full border text-xs overflow-hidden ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
            {(['overview', 'deals'] as Tab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 capitalize transition-colors ${
                  activeTab === tab
                    ? isDarkMode ? 'bg-white/10 text-white' : 'bg-black/8 text-black'
                    : isDarkMode ? 'text-white/40 hover:text-white/70' : 'text-black/40 hover:text-black/70'
                }`}
              >
                {tab === 'deals' ? '🛍️ Deals' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`text-xs px-4 py-2 border rounded-full transition-colors ${
              isDarkMode ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/5'
            }`}
          >
            {isDarkMode ? '☀️ Utility View' : '🌙 Premium View'}
          </button>

          <button onClick={() => router.push('/merchant/login')} className="text-xs opacity-50 hover:opacity-100">
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main content — tabs */}
      {activeTab === 'overview' && (
        <main className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Col: Analytics */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <section>
              <h2 className={`text-xl font-display font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Impact Report
              </h2>
              <ImpactReport isDark={isDarkMode} />
            </section>

            <section className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-[#0C0C0C] border-white/5' : 'bg-white border-black/5 shadow-sm'}`}>
              <h3 className="text-sm font-semibold mb-2">Milestone Progress</h3>
              <p className={`text-xs mb-4 ${isDarkMode ? 'text-gainsboro/60' : 'text-gray-500'}`}>
                You are 75 votes away from unlocking the <strong>GTA Fan Favorite</strong> badge!
              </p>
              <div className="w-full h-2 rounded-full overflow-hidden bg-black/10 relative">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-[#00FFFF]" style={{ width: '85%' }} />
              </div>
            </section>
          </div>

          {/* Right Col: Upsells */}
          <div className="col-span-1">
            <h2 className={`text-xl font-display font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Growth Hub
            </h2>
            <UpsellModule isDark={isDarkMode} />
          </div>
        </main>
      )}

      {activeTab === 'deals' && (
        <main className="max-w-3xl mx-auto px-8 py-12 space-y-8">
          <div>
            <h2 className={`text-xl font-display font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Post a Deal
            </h2>
            <p className={`text-xs mb-6 ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>
              Deals appear live in the consumer feed immediately after posting.
            </p>
            <PostComposer
              businessId={DEMO_BUSINESS_ID}
              isDark={isDarkMode}
              onPosted={post => setMyPosts(prev => [post, ...prev])}
            />
          </div>

          {myPosts.length > 0 && (
            <div>
              <h3 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-white/60' : 'text-black/50'}`}>
                Your recent posts
              </h3>
              <div className="space-y-3">
                {myPosts.map(post => (
                  <div
                    key={post.id}
                    className={`p-4 rounded-xl border text-sm ${isDarkMode ? 'bg-[#0C0C0C] border-white/5 text-white/80' : 'bg-white border-black/5 text-black/80'}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="leading-relaxed">{post.content}</p>
                      <button
                        onClick={async () => {
                          await fetch(`/api/posts/${post.id}`, { method: 'DELETE' });
                          setMyPosts(prev => prev.filter(p => p.id !== post.id));
                        }}
                        className="text-xs opacity-40 hover:opacity-80 shrink-0"
                      >
                        Delete
                      </button>
                    </div>
                    <p className={`text-xs mt-2 ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}>
                      {post.deal_type} · just now
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}
    </div>
  );
}
