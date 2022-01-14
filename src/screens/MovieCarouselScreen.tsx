/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Movie from '../common/Movie';
import {search} from '../config/tmd-api';


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
    /*
      <Text style={{fontSize: 30}}>{movies && movies[thing.index] ? movies[thing.index].title : 'SHIT'}</Text>
      <Text>{movies && movies[thing.index] ? movies[thing.index].poster_path : 'SHIT'}</Text>
    */
    return (
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Image
          source={{
            uri: Image_Http_URL(movies && movies[thing.index] ? movies[thing.index].poster_path : 'pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'),
          }}
          style={{height: 200, margin: 5}}
        />
      </View>
    );
  };
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <Carousel
        layout={'default'}
        data={movies ? movies : []}
        sliderWidth={600}
        itemWidth={300}
        renderItem={_renderItem.bind(this)}
        onSnapToItem={(index) => setActiveIndex(index)}
        style={{alignItems: 'center'}}
      />
    </View>
  );
};

export default MovieCarouselScreen;
