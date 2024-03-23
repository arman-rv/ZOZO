const GalleryItems = ({img}) => {
    return ( 
        <div className="w-1/5 h-[310px] shadow-[8px_8px_15px_1px_#2b2b2b18] rounded-xl overflow-hidden relative max-[1350px]:h-[270px] max-[1200px]:h-[240px] max-[1100px]:h-[200px] max-[960px]:h-[180px] max-[880px]:h-[165px] max-[800px]:h-[145px] max-[730px]:h-[125px]" >
          <img src={img} className="w-full h-full" />
        </div>
     );
}
 
export default GalleryItems;