import './BestSellers.css';

const BestSellers = () => {

    const sellersData = [
        {
            id: 1,
            img: "/images/sellers/1.avif",
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt eiusmod ut labore et dolore magna eiusmod.",
        },
        {
            id: 2,
            img: "/images/sellers/2.avif",
            title: "Lorem Ipsum",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod eiusmod tempor incididunt ut labore et dolore magna eiusmod.",
        },
        {
            id: 3,
            img: "/images/sellers/3.avif",
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
