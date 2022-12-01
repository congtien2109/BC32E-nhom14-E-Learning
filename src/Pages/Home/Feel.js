import React from "react";
import "./Feel.scss";
export default function Feel() {
  return (
    <section className="feel">
      <h3 className="title">Nhận Định Mới *3</h3>
      <div className="main-content">
        <div id="feel-user" className="carousel slide" data-ride="carousel">
          <div className="carousel-indicators">
            <div
              className="img-info active"
              data-target="#feel-user"
              data-slide-to={0}
            >
              <div className="overflow"></div>
              <img src="./Img/ImgLogo/feel-1.jpg" alt="" />
            </div>
            <div
              className="img-info"
              data-target="#feel-user"
              data-slide-to={1}
            >
              <div className="overflow"></div>
              <img src="./Img/ImgLogo/feel-2.jpg" alt="" />
            </div>
            <div
              className="img-info"
              data-target="#feel-user"
              data-slide-to={2}
            >
              <div className="overflow"></div>
              <img src="./Img/ImgLogo/feel-3.jpg" alt="" />
            </div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="content">
                “ JS là một lĩnh vực rất trending trong thời điểm hiện tại, và
                người dùng ngày nay đang có xu hướng mua hàng rất nhiều trên các
                nền tảng mạng xã hội. Tuy nhiên, kiến thức về hình thức tiếp thị
                này vẫn chưa được phổ cập rộng rãi, vậy nên trong khóa học miễn
                phí trên VLearning này, Maya sẽ cũng cấp cho bạn kiến thức tổng
                quan về social media marketing hướng dẫn cho bạn từng bước để
                bắt đầu với Social Media Marketing một cách hiệu quả.”
              </div>
              <div className="info">
                <p>
                  _Jack, <span>CEO</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                “ Khóa học hay và chi tiết. Cảm ơn anh Tiến nhiều ạ. Mong anh
                giữ gìn sức khỏe, hạnh phúc trong cuộc sống. Đặc biệt là sẽ cống
                hiến thêm nhiều video hay và bổ ích. Khóa học rất đáng tiền nha
                ”
              </div>
              <div className="info">
                <p>
                  _Bingchilling, <span>Developer</span>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="content">
                “ Khóa học chất lượng, chỉ phải bỏ ra khoảng 1tr mà có được kinh
                nghiệm , cũng như kiến thức đi làm thực tế suốt 4 năm của a
                Tiến, giúp mình tiết kiệm thời gian tự học lên rất nhiều. đã mua
                tới 4 khóa học của a hi hi ”
              </div>
              <div className="info">
                <p>
                  _Jenny Kita, <span>CEO</span>
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#feel-user"
            role="button"
            data-slide="prev"
          >
            <span>{"<"}</span>
          </a>
          <a
            className="carousel-control-next"
            href="#feel-user"
            role="button"
            data-slide="next"
          >
            <span>{">"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
