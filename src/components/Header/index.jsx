import React from "react"
import styles from "./Header.module.css"
export default function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.header1}>
                <div className={styles.mainheader}>
                    最新
                </div>
                <div className={styles.mainheader}>
                    推廣
                </div>
                <div className={styles.mainheader}>
                    HOME
                </div>
                <div className={styles.mainheader}>
                    最近按讚
                </div>
                <div className={styles.mainheader}>
                    我的帳戶
                </div>
            </div>
            <div className={styles.header2}>
                <div className={styles.secondheader}>
                    療癒
                </div>
                <div className={styles.secondheader}>
                    校園
                </div>
                <div className={styles.secondheader}>
                    奇幻
                </div>
                <div className={styles.secondheader}>
                    愛情
                </div>
                <div className={styles.secondheader}>
                    恐怖
                </div>
                <div className={styles.secondheader}>
                    懸疑
                </div>
                <div className={styles.secondheader}>
                    搞笑
                </div>
            </div>
        </div>
    );
}



