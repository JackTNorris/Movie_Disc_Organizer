/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Movie from '../common/Movie';
import {search} from '../config/tmd-api';
import Carousel from 'react-native-reanimated-carousel';


export interface MovieCarouselScreenProps {};

const MovieCarouselScreen: React.FC<MovieCarouselScreenProps> = (props: MovieCarouselScreenProps) => {
  const [movies, setMovies] = useState<Movie[]>();
  const [activeIndex, setActiveIndex] = useState<number>();
  const Image_Http_URL = (jpgName: string) => {
    return `https://image.tmdb.org/t/p/w500/${jpgName}`;
  }
  const [carouselItems, setCarouselItems] = useState<any[]>([
    {
      title: 'Iasdfasdf',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
    },
  ]);
  useEffect(() => {
    const getMovies = async () => {
      if (!movies) {
        const m = await search('Avatar');
        setMovies(m)
      }
    } 
    getMovies();
  }, [movies]);

  const _renderItem = (thing: {item: any; index: any}) => {
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 300,
          width: 200,
        }}>
          <Image
            source={{
              uri: Image_Http_URL(movies && movies[thing.index] ? movies[thing.index].poster_path : 'pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'),
            }}
            style={{height: 300, margin: 5}}
          />
      </View>
    );
  };
  const width = Dimensions.get('window').width;

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <View>
      <Carousel
                loop
                width={width}
                height={width / 2}                
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
      </View>
    </View>
  );
};

export default MovieCarouselScreen;
