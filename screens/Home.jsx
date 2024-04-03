import { Image, Text, View } from "react-native";
import Logo from "../assets/cs_white.png";
import { useCS } from "../contexts/CScontext";
import { useEffect, useState } from "react";
export default function Home() {
  const {getData} = useCS()
  const [text,setText] = useState('')
  useEffect(()=>{
    getData().then((res)=>{
      setText(res)
    })
  },[getData])
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Image
        source={Logo}
        style={{ width: 200, height: 200, objectFit: "contain" }}
      />
      <Text style={{ color: "#fff",fontSize:20 }}>{text&& text}</Text>
    </View>
  );
}
