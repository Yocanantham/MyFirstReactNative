import React, {useEffect, useState} from 'react';
import {SafeAreaView, Image, View, ActivityIndicator, Text} from 'react-native';

const ImageComponent = () => {
  // const [image, setImage] = useState(require('../../assests/images/cake.png'));

  const [image, setImage] = useState('');
  const [isLoading, setLoading] = useState(true);

  //-> Making a artificial delay for understanding the {onLoad} in an image now
  useEffect(() => {
    const timerId = setTimeout(() => {
      setImage(require('../../assests/images/cake.png'));
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* //-> The activity indicator is made to an example of { onLoad } now */}
      {isLoading && (
        <ActivityIndicator
          style={{width: 100, height: 100}}
          size="large"
          color="#000000"
        />
      )}

      {/* //-> The image is rendered conditionally that the {activityindicator} is working like we expected for testing now */}
      {image && (
        <Image
          /* 
                 * Using local paths in an image now
                 - source={require("../../assests/images/cake.png")}
                
                 * Using network paths in image now
                 - source={require("../../assests/images/cake.png")}
            */
          source={image}
          resizeMethod="contain"
          // For handling the image not found error and display a placehoolder instead now
          onError={() => {
            setImage(require('../../assests/images/fallbackimage.png'));
          }}
          // For handling the loading now
          onLoad={() => {
            setLoading(false);
          }}
          style={{width: 100, height: 100, borderRadius: 15}}
        />
      )}
    </View>
  );
};
export default ImageComponent;

/*
  * source:
  - Specifies the image to display.
  - Can be a local image (require('./path-to-image.jpg')) or a remote URL ({ uri: 'https://example.com/image.jpg' }).
*/

/*
  * style:
  - Apply styles such as  { width } , { height }, { borderRadius }, etc.
  - Commonly used for setting image dimensions.
*/

/*
  * resizeMode:
  - Determines how the image should fit within its frame.
  -> Options:
    - 'cover' (default): Scales image to fill the frame.
    - 'contain': Scales image to fit inside the frame without cropping.
    - 'stretch': Stretches the image to fill the frame (may distort the image).
    - 'repeat': Repeats the image to fill the frame.
    - 'center': Centers the image without scaling.
*/

/*
  * onLoad:
  - A callback that triggers when the image starts loading successfully.
  - Useful for analytics or showing a loading indicator.
*/

/*
  * onError:
  - A callback that triggers when the image fails to load.
  - Useful for showing a fallback image or displaying an error message.
*/

/*
  => defaultSource (iOS only):
  - Displays a placeholder image while the main image is loading.
  - Good for improving user experience during remote image loading.
*/
