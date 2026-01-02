'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Ticket, Music, Heart, ExternalLink } from 'lucide-react';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-red-900 selection:text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image - Standard HTML IMG Tag (Most Robust) */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/20260321sapporo_live/hero_final.png"
            alt="Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Gradients to ensure text readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black/30" />

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-block"
          >
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent font-bold tracking-[0.2em] text-sm md:text-xl uppercase border border-yellow-500/30 px-6 py-2 rounded-full bg-black/60 backdrop-blur-md shadow-lg">
              Acoustic 2MAN LIVE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
          >
            鴨頭嘉人<br className="md:hidden" /><span className="text-red-600 mx-2">×</span>マミヨ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-3xl font-light tracking-widest text-white mb-16 drop-shadow-md"
          >
            声と音が、至近距離で響き合う。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col gap-6 justify-center items-center font-bold"
          >
            {/* Enlarged Date */}
            <div className="flex items-center gap-3 text-3xl md:text-6xl tracking-tighter bg-black/30 backdrop-blur-sm px-6 py-2 rounded-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Calendar className="w-8 h-8 md:w-12 md:h-12 text-yellow-400" />
              <span>2026.3.21 <span className="text-2xl md:text-4xl">SAT</span></span>
            </div>

            {/* Venue Link */}
            <a
              href="http://www.jamusica.jp"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-lg md:text-2xl hover:text-red-400 transition-all bg-black/30 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10 hover:border-red-500/50"
            >
              <MapPin className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="border-b border-transparent group-hover:border-red-400">Live&Dining JAMUSICA (SAPPORO)</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-70 drop-shadow-md">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-80 shadow-[0_0_10px_white]"></div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32 px-4 bg-[#050505]">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeInUp} className="space-y-8 text-lg md:text-2xl leading-relaxed font-light text-gray-200">
            <p>
              日本武道館でのライブを控えた<span className="font-bold text-white">鴨頭嘉人</span>と、<br />
              昼ドラ主題歌でメジャーデビューした<br className="md:hidden" />札幌出身の<span className="font-bold text-white">マミヨ</span>による、<br />
              アコースティック2マンライブ！
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-red-600 to-transparent mx-auto opacity-50 my-8"></div>
            <p>
              “声”と“音”が、<br className="md:hidden" />至近距離で響き合う昼公演。<br />
              この空気感は会場でしか味わえません。<br />
              ぜひお集まりください！
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performers Section */}
      <section className="py-20 bg-gradient-to-b from-[#050505] to-[#111]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 md:mb-32 tracking-wider text-white/10 select-none pointer-events-none absolute w-full left-0">
            ARTISTS
          </h2>
          <div className="relative z-10 flex flex-col gap-24 max-w-6xl mx-auto">

            {/* Kamogashira */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              <div className="w-full md:w-1/2 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.1)] border border-white/5 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <Image src="/20260321sapporo_live/kamo.png" alt="鴨頭嘉人" fill className="object-cover group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: 'center top' }} />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-3xl font-bold mb-1">鴨頭 嘉人</h3>
                  <p className="text-red-500 font-medium tracking-tight">YOSHIHITO KAMOGASHIRA</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h4 className="text-2xl font-bold flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-red-600"></span>
                  魂の叫びを受け取れ！
                </h4>
                <p className="text-gray-300 leading-loose">
                  日本一の講演家・鴨頭嘉人が、「Challenge Like A Baby」あのころ諦めた夢に挑戦する姿を世の中の大人たちに見せるために2年前に歌手活動を開始。<br /><br />
                  常人では考えられないの努力量でその歌声はいつしか本物のアーティストをも凌駕する「声」となった。<br /><br />
                  そして、元々持っている言葉の力！<br /><br />
                  それが存分に発揮されるのがアコースティックライブ。
                  そこにはまぎれもないアーティスト「鴨頭嘉人」がそこにいる！<br /><br />
                  聞いた人のほとんどが涙する鴨さんのアコースティックライブ。
                  魂の叫びを受け取れ！！！
                </p>
                <a href="https://kamogashira.com/music/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors uppercase tracking-widest text-sm font-bold border-b border-red-500/20 pb-1">
                  Official Site <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Mamiyo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            >
              <div className="w-full md:w-1/2 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,0,0.05)] border border-white/5 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <Image src="/20260321sapporo_live/mamiyo.png" alt="マミヨ" fill className="object-cover group-hover:scale-105 transition-transform duration-700" style={{ objectPosition: 'center top' }} />
                <div className="absolute bottom-6 right-6 z-20 text-right">
                  <h3 className="text-3xl font-bold mb-1">マミヨ</h3>
                  <p className="text-yellow-500 font-medium tracking-tight">MAMIYO</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6 text-right md:text-left">
                <h4 className="text-2xl font-bold flex items-center justify-end md:justify-start gap-3">
                  <span className="w-8 h-[2px] bg-yellow-500 md:order-first order-last"></span>
                  小さな怪獣、再び覚醒。
                </h4>
                <p className="text-gray-300 leading-loose">
                  札幌出身、身長144cmの小さな身体に、音楽の神様に愛された「大きな魂」を宿すシンガーソングライター。
                  かつてTBS系昼ドラ『ママまっしぐら2』の主題歌でメジャーデビューし、その後も作曲家・作詞家として数々のアーティストに楽曲を提供してきた。<br /><br />

                  しかし、彼女もまた、一度は「歌手」としての道を諦めた過去を持つ。 自分は裏方でいい。そう決めてマイクを置いた彼女の魂に、再び火をつけたのは2年前。 豊洲PITで行われた鴨頭嘉人のデビューライブだった。<br /><br />

                  「悔しい」<br /><br />

                  その衝動が、止まっていた時計を動かした。
                  その覚悟は、共に古事記projectを立ち上げた盟友であり、カモバンドのドラマーとして豊洲ピットの舞台に立っていた村上良之との「マミヨバンド」結成へと繋がる。
                  今回の凱旋ライブは、その村上とのユニット「マミヨバンド acoustic set」で挑む。<br /><br />

                  鴨頭嘉人に背中を押され、再び覚醒した小さな怪獣・マミヨ。 その「大きな魂」の歌声を、全身で浴びてほしい。
                </p>
                <div className="flex justify-end md:justify-start">
                  <a href="https://mamiyoband.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors uppercase tracking-widest text-sm font-bold border-b border-yellow-500/20 pb-1">
                    Official Site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Ticket Section */}
      <section id="tickets" className="py-24 bg-[#050505] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute -left-20 top-40 w-80 h-80 bg-red-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute -right-20 bottom-40 w-80 h-80 bg-yellow-900/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">TICKETS</h2>
            <p className="text-gray-400">チケット情報</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Standard Ticket */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Ticket className="w-32 h-32" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">通常チケット</h3>
                  <p className="text-gray-400 mb-4">ライブへの参加はこちら</p>
                  <div className="flex items-baseline gap-2 justify-center md:justify-start">
                    <span className="text-4xl md:text-6xl font-black text-white">3,000</span>
                    <span className="text-xl text-gray-400">円</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">＋2 Drink (1,200円)</p>
                </div>
                <a
                  href="https://buy.stripe.com/9B66oH5cqgjt4rr1sq5sA0y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-gray-200 transition-colors px-12 py-4 rounded-full font-bold text-xl tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform active:scale-95"
                >
                  チケットを購入する
                </a>
              </div>
            </motion.div>

            {/* Support Ticket (Kamo) */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 border border-red-900/30 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mb-6 text-red-500">
                <Heart className="w-8 h-8" fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold mb-2">支援チケット<br />(鴨さんに1杯)</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">鴨頭嘉人へのドリンク応援！</p>
              <div className="text-3xl font-black text-white mb-6">1,000<span className="text-base font-normal text-gray-400">円</span></div>
              <a
                href="https://buy.stripe.com/4gM8wP20e6IT3nnb305sA0z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-red-900/80 hover:bg-red-800 text-white py-3 rounded-full font-bold transition-all border border-red-500/30"
              >
                応援する
              </a>
            </motion.div>

            {/* Support Ticket (Mamiyo) */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 border border-yellow-900/30 rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-yellow-900/20 rounded-full flex items-center justify-center mb-6 text-yellow-500">
                <Music className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">支援チケット<br />(マミヨ・村上に1杯)</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">マミヨ・村上良之への応援！</p>
              <div className="text-3xl font-black text-white mb-6">1,000<span className="text-base font-normal text-gray-400">円</span></div>
              <a
                href="https://buy.stripe.com/aFa4gz34i5EP4rr8US5sA0A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-yellow-900/80 hover:bg-yellow-800 text-white py-3 rounded-full font-bold transition-all border border-yellow-500/30"
              >
                応援する
              </a>
            </motion.div>

          </div>

          <p className="text-center text-gray-500 text-xs mt-12">
            ※チケット購入後のキャンセル・払い戻しはできませんのでご注意ください。
          </p>
        </div>
      </section>

      {/* Event Details Text Section */}
      <section className="py-20 bg-black text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 tracking-widest text-gray-400">EVENT DETAILS</h3>
          <div className="inline-block text-left space-y-4 text-gray-300 font-mono text-sm md:text-base border-l-2 border-white/20 pl-6">
            <p>
              <span className="block text-xs text-gray-500 mb-1">DATE</span>
              2026年3月21日（土）
            </p>
            <p>
              <span className="block text-xs text-gray-500 mb-1">VENUE</span>
              Live&Dining JAMUSICA (札幌)
            </p>
            <p>
              <span className="block text-xs text-gray-500 mb-1">TIME</span>
              OPEN 13:00 / START 13:30
            </p>
            <p>
              <span className="block text-xs text-gray-500 mb-1">TICKET</span>
              3,000円 ＋ 2Drink (1,200円)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-center">
        <div className="container mx-auto space-y-4">
          <a href="/tokushoho" className="text-gray-500 hover:text-white text-xs underline transition-colors">特定商取引法に基づく表記</a>
          <p className="text-gray-600 text-xs">&copy; 2026 ACOUSTIC 2MAN LIVE. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
