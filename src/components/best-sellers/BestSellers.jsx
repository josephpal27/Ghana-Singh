import './BestSellers.css';
import sellerImg1 from '../../assets/images/sellers/1.avif';
import sellerImg2 from '../../assets/images/sellers/2.avif';
import sellerImg3 from '../../assets/images/sellers/3.avif';

const BestSellers = () => {

    const sellersData = [
        {
            id: 1,
            img: sellerImg1,
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt eiusmod ut labore et dolore magna eiusmod.",
        },
        {
            id: 2,
            img: sellerImg2,
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod eiusmod tempor incididunt ut labore et dolore magna eiusmod.",
        },
        {
            id: 3,
            img: sellerImg3,
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt eiusmod ut labore et dolore magna eiusmod.",
        },
    ]

    return (
        <>
            <div className="best-sellers">
                <h4 data-aos="fade-up">BEST SELLERS</h4>
                <p data-aos="fade">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="sellers-card-row">
                    {
                        sellersData.map((item, index) => {
                            return (
                                <div className="seller-card" key={index} data-aos="fade">
                                    <div className="card-image">
                                        <img src={item.img} alt={`Seller ${item.id}`} loading="lazy" />
                                    </div>
                                    <div className="card-desc">
                                        <span>{item.title}</span>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default BestSellers
