const SwiperSlideWrapper = () => {
  return (
    <div className="rounded-lg bg-black overflow-hidden w-full">
      <img src="img/videoBannerImg.webp" alt="" />
      <div className="p-2">
        <h3 className="text-white text-md mb-1">تایتانیک</h3>
        <div className="flex justify-between">
          <p className="text-xs">2009</p>
          <div className="flex flex-row-reverse gap-1 text-xs">
            <p>☰</p>
            <p>8.7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default SwiperSlideWrapper;