import Image from "next/image";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <div className="productCard">
      <div className="card">
        <div className="top">
          <Image
            src={props.img}
            alt="Product"
            width={411}
            height={669}
            placeholder="blur"
          />
          <div className="overlay">
            <div className="overlayShadow"></div>
            <Link href={`/shop/${props.id}`} passHref>
              <button className="viewBtn">View</button>
            </Link>
          </div>
        </div>
        <div className="bottom">
          <div className="productDecs">
            <span className="productName">{props.name}</span>
            <span className="icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
              </svg>
            </span>
          </div>
          <h3 className="productPrice">UGX{props.price}</h3>
        </div>
      </div>
      <style jsx>{`
        .productDecs {
          display: flex;
        }
        .productCard {
          margin-top: 40px;
          margin-right: 7px;
        }
        .top {
          width: 200px;
          position: relative;
        }
        .bottom {
          width: 200px;
          height: 70px;
        }
        .productName {
          margin: 0;
          width: 90%;
          font-size: 16px;
          font-weight: 400;
          color: #282828;
        }
        .productPrice {
          width: 90%;
          font-size: 18px;
          font-weight: 300;
          margin: 0;
        }
        .viewBtn {
          width: 100%;
          font-size: 20px;
          height: 45px;
          border: none;
          font-weight: 500;
          color: #282828;
          background-color: rgba(255, 255, 255, 0.856);
        }

        .overlay {
          visibility: hidden;
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease-in-out;
        }
        .overlayShadow {
          width: 100%;
          height: calc(100% - 50px);
          background-color: rgba(97, 97, 97, 0.39);
        }
        .top:hover .overlay {
          visibility: visible;
        }
        .icon > svg {
          color: #2d2d2d;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;