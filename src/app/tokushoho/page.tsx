import Link from 'next/link';

export default function Tokushoho() {
    return (
        <main className="min-h-screen bg-black text-white py-20 px-4">
            <div className="container mx-auto max-w-3xl">
                <h1 className="text-3xl font-bold mb-10 text-center">特定商取引法に基づく表記</h1>

                <table className="w-full border-collapse text-sm md:text-base">
                    <tbody>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left w-1/3 text-gray-400 font-medium">販売業者</th>
                            <td className="py-4">古事記project株式会社</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left text-gray-400 font-medium">運営統括責任者</th>
                            <td className="py-4">村上良之</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left text-gray-400 font-medium">所在地</th>
                            <td className="py-4">〒166-0014 東京都杉並区松ノ木2-19-26-B1</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left text-gray-400 font-medium">電話番号</th>
                            <td className="py-4">03-5929-9689</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left text-gray-400 font-medium">メールアドレス</th>
                            <td className="py-4">info@kojiki-project.com</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left text-gray-400 font-medium">販売価格</th>
                            <td className="py-4">販売ページに記載</td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left text-gray-400 font-medium">商品代金以外の必要料金</th>
                            <td className="py-4">
                                ・消費税<br />
                                ・振込手数料（銀行振込の場合）<br />
                                ・システム利用料（チケットサイト等の場合）
                            </td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left text-gray-400 font-medium">お支払方法</th>
                            <td className="py-4">
                                クレジットカード決済、銀行振込、その他販売ページに記載の方法
                            </td>
                        </tr>
                        <tr className="border-b border-gray-800">
                            <th className="py-4 text-left text-gray-400 font-medium">返品・交換・キャンセル等</th>
                            <td className="py-4">
                                お客様都合による返品・交換・キャンセルはお受けしておりません。<br />
                                イベント中止等の場合は、別途払い戻し等のご連絡をいたします。
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="mt-12 text-center">
                    <Link href="/" className="text-gray-400 hover:text-white underline">トップページに戻る</Link>
                </div>
            </div>
        </main>
    );
}
