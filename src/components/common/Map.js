import { useEffect, useRef, useState } from "react";

export default function Map(props) {
  const { naver } = window;
  const container = useRef(null);
  const [ Location, setLocation ] = useState(null);

  const curLng = props.latLng.split(',');

  useEffect(()=>{
    const mapInstance = new naver.maps.Map(container.current, {
      center: new naver.maps.LatLng(curLng[0],curLng[1]),
      zoom: 15
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(curLng[0],curLng[1]),
      map: mapInstance
    });

    marker.setPosition(marker.position);
    setLocation(mapInstance);

    return () => {
      container.current.innerHTML = '';
    }
  }, [])

  window.addEventListener('resize', ()=>{
    Location.setCenter(curLng[0],curLng[1]);
  })

  return (
    <>
    <div id="map" ref={container}></div>
    </>
  );
}