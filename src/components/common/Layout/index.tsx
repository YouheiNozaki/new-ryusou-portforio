import Image from 'next/image';
import { AiOutlineLink } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { LayoutStyle } from './layout.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

import cat from '../../../../public/cat.png';
import react from '../../../../public/react.png';
import typescript from '../../../../public/typescript.png';
import nodejs from '../../../../public/nodejs.png';
import aws from '../../../../public/aws.png';

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={LayoutStyle.container}>
        <div className={LayoutStyle.wrapper}>
          <main className={LayoutStyle.main}>{children}</main>
          <section className={LayoutStyle.section}>
            <article className={LayoutStyle.profile}>
              <div>
                <div className={LayoutStyle.sectionTitle}>
                  <h3 className={LayoutStyle.text}>プロフィール</h3>
                  <CgProfile className={LayoutStyle.icon} size={20} />
                </div>
                <Image
                  src={cat}
                  width={120}
                  height={120}
                  alt="りゅーそうブログのロゴ"
                />
                <p>りゅーそう</p>
                <p>元高校地歴科教員。現在microCMSでエンジニアをしています。</p>
                <p>Saitama.jsというLT会を運営中です。</p>
                <p>発言はすべて個人の意見です。</p>
              </div>
              <div>
                <h3>技術</h3>
                <ul className={LayoutStyle.ul}>
                  <li className={LayoutStyle.li}>
                    <Image src={react} width={40} height={40} alt="React" />
                  </li>
                  <li className={LayoutStyle.li}>
                    <Image
                      src={typescript}
                      width={40}
                      height={40}
                      alt="TypeScript"
                    />
                  </li>
                  <li className={LayoutStyle.li}>
                    <Image src={nodejs} width={40} height={40} alt="Node.js" />
                  </li>
                  <li className={LayoutStyle.li}>
                    <Image src={aws} width={40} height={40} alt="AWS" />
                  </li>
                </ul>
              </div>
            </article>
            <article className={LayoutStyle.link}>
              <div className={LayoutStyle.sectionTitle}>
                <h3 className={LayoutStyle.text}>リンク</h3>
                <AiOutlineLink className={LayoutStyle.icon} size={20} />
              </div>
              <ul>
                <li>
                  <a href="https://twitter.com/ryusou_mtkh">Twitter</a>
                </li>
                <li>
                  <a href="https://github.com/YouheiNozaki">GitHub</a>
                </li>
                <li>
                  <a href="https://saitamajs.connpass.com/">Saitama.js</a>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
