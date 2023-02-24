import { useTranslations } from 'next-intl'

export default function Recommend() {
  const t = useTranslations('Index')
  return (
    <div className="my-5 max-w-xl w-full">
      <h2 className=" text-slate-400 mb-4">{t('recommend')}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <li>
          <a href="https://chatgpt.yunjunet.cn/" target="_blank" className="recommend-container">
            ChatGPT机器人
          </a>
        </li>
        <li>
          <a href="https://https://chatgpt.yunjunet.cn/draw.html" target="_blank" className="recommend-container">
            AI绘画
          </a>
        </li>
      </ul>
    </div>
  )
}
