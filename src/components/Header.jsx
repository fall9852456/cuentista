export default function Header() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="Header">
            <div className="header1">
                <div className="main-header">
                    最新
                </div>
                <div className="main-header">
                    推廣
                </div>
                <div className="main-header">
                    HOME
                </div>
                <div className="main-header">
                    最近按讚
                </div>
                <div className="main-header">
                    我的帳戶
                </div>
            </div>
            <div className="header2">
                <div className="second-header">
                    療癒
                </div>
                <div className="second-header">
                    校園
                </div>
                <div className="second-header">
                    奇幻
                </div>
                <div className="second-header">
                    愛情
                </div>
                <div className="second-header">
                    恐怖
                </div>
                <div className="second-header">
                    懸疑
                </div>
                <div className="second-header">
                    搞笑
                </div>
            </div>
        </div>
    );
}



