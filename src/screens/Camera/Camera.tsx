import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Image,
  Button,
} from "react-native";

import { SafeScreen } from "@/components/template";
import IonIcons from "react-native-vector-icons/Ionicons";

import {
  Camera as Camera1,
  PhotoFile,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from "react-native-vision-camera";
import layout from "@/theme/layout";

function Camera() {
  const device = useCameraDevice("back", {
    physicalDevices: ["ultra-wide-angle-camera"],
  });

  const barcodeData = {
    "978020137962": { name: "Product 1", price: 10.99 },
    // '987654321': { name: 'Product 2', price: 19.99 },
    // Add more barcode-value mappings as needed
  };

  const { hasPermission, requestPermission } = useCameraPermission();
  const [active, setActive] = useState(false);
  const [barCode, setBarCode] = useState(barcodeData);
  const [photo, setPhoto] = useState<PhotoFile>();
  console.log("has permission : ", hasPermission);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

  if (!hasPermission) {
    return <ActivityIndicator />;
  }

  if (!device) {
    return <Text>Camera device not found</Text>;
  }
  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes: any) => {
      console.log(`Scanned ${codes.length} codes!`);
      console.log(codes[0].value);
      if (barCode === codes[0].value) {
        setActive(true);
        console.log(active);
      }
    },
  });

  // const codeScanner = useCodeScanner({
  //   codeTypes: ["qr", "ean-13"],
  //   onCodeScanned: (codes) => {
  //     console.log(`Scanned ${codes.length} codes!`);
  //   },
  // });

  const camera = useRef<Camera1>(null);

  const onTakePicturePressed = async () => {
    const photo = await camera.current?.takePhoto();
    console.log(photo);
    setPhoto(photo);
  };

  const uploadPhoto = async () => {
    if (!photo) {
      return;
    }

    const result = await fetch(`file://${photo.path}`);
    const data = await result.blob();
    console.log(data);
  };
  // useEffect(() => {
  //   requestPermission();
  // }, []);
  // if (device == null)
  //   return (
  //     <View>
  //       <Text>Device not found</Text>
  //     </View>
  //   );
  return (
    <SafeScreen>
      <View>
        {photo ? (
          <View style={[layout.fullHeight, layout.fullWidth]}>
            <Image
              source={{ uri: "file://" + photo.path }}
              style={StyleSheet.absoluteFill}
            />
            <IonIcons
              onPress={() => setPhoto(undefined)}
              name="arrow-back-outline"
              size={25}
              color="black"
              style={{ position: "absolute", top: 30, left: 30 }}
            />
            {/* <View
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                paddingBottom: 50,
                // backgroundColor: "rgba(0, 0, 0, 0.40)",
              }}
            >
              <Button title="Upload" onPress={uploadPhoto} />
            </View> */}
          </View>
        ) : (
          <View style={[layout.fullHeight]}>
            <Camera1
              ref={camera}
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={true}
              codeScanner={codeScanner}
              photo={true}
            />
            <Pressable
              onPress={onTakePicturePressed}
              style={{
                position: "absolute",
                alignSelf: "center",
                borderRadius: 50,
                bottom: 50,
                width: 75,
                height: 65,
                backgroundColor: "white",
              }}
            />
          </View>
        )}
      </View>
    </SafeScreen>
  );
}

export default Camera;
