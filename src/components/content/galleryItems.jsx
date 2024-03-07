const GalleryItems = ({img}) => {
    return ( 
        <div className="w-1/5 h-[310px] shadow-[8px_8px_15px_1px_#2b2b2b18] rounded-xl overflow-hidden relative" >
          <img src={img} className="w-full h-full" />
        </div>
     );
}
 
export default GalleryItems;