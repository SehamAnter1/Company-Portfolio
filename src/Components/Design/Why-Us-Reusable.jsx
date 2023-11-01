function Whyusreusable(props) {
  const { data, title ,className } = props;
  return (
    <>
      <div className={className}>
        <div className="container pt-5 col-md-10 col-lg-9 mx-auto">
          <h2 className="title text-white fs-1">{title}</h2>
          <div className="row py-3 ">
            {data.map((data, dataIndex) => (
              <div
                key={dataIndex}
                className="box col-10 mx-auto col-sm-6 col-md-4 py-4"
              >
                <img src={data.imgUrl} className="w-25 mb-4" alt={data.alt} />
                <h2 className="title text-white fs-5">{data.title}</h2>
                <p className="description col-md-11 col-lg-10  me-auto">
                  {data.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Whyusreusable;
