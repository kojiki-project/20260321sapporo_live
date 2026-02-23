'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Script from 'next/script';

// チケット種類ごとの金額マッピング
const TICKET_PRICES: Record<string, { name: string; value: number }> = {
    standard: { name: '通常チケット', value: 3000 },
    'support-kamo': { name: '支援チケット（鴨さんに1杯）', value: 1000 },
    'support-mamiyo': { name: '支援チケット（マミヨ・村上に1杯）', value: 1000 },
    'support-all': { name: '支援チケット（まとめて応援）', value: 2000 },
};

const DEFAULT_PRICE = 3000;

function ThanksContent() {
    const searchParams = useSearchParams();
    const ticketType = searchParams.get('ticket') || 'standard';
    const ticketInfo = TICKET_PRICES[ticketType];
    const purchaseValue = ticketInfo ? ticketInfo.value : DEFAULT_PRICE;

    return (
        <>
            {/* Meta Pixel - Purchase Event */}
            <Script
                id="meta-pixel-purchase"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            fbq('track', 'Purchase', {
              value: ${purchaseValue},
              currency: 'JPY'
            });
          `,
                }}
            />

            <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4">
                <div className="max-w-lg w-full text-center space-y-8">
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(234,179,8,0.3)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    {/* Title */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                            THANK YOU
                        </h1>
                        <p className="text-gray-400 text-sm tracking-widest uppercase">Purchase Complete</p>
                    </div>

                    {/* Message */}
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p className="text-lg">
                            チケットのご購入ありがとうございます。
                        </p>
                        <p>
                            購入完了メールをお送りいたしましたので<br />
                            ご確認ください。
                        </p>
                        <p>
                            当日お会いできることを<br />
                            楽しみにしております。
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto" />

                    {/* Event Info */}
                    <div className="text-sm text-gray-500 space-y-1">
                        <p>ACOUSTIC 2MAN LIVE</p>
                        <p>2026.3.21 SAT / Live&Dining JAMUSICA (SAPPORO)</p>
                    </div>

                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold transition-all border border-white/10 hover:border-white/20"
                    >
                        トップページへ戻る
                    </Link>
                </div>
            </main>
        </>
    );
}

export default function ThanksPage() {
    return (
        <Suspense fallback={
            <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
                <p className="text-gray-400">読み込み中...</p>
            </main>
        }>
            <ThanksContent />
        </Suspense>
    );
}
