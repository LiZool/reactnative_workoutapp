import { Link, router, useLocalSearchParams } from "expo-router";
import { Text, View, Pressable } from "react-native";
import { meditations } from "@/data";
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Slider from '@react-native-community/slider';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

import audio from '@assets/meditations/LACKADAISY ELECTRO SWING REMIX  Olive Branch - Sepiatonic.mp3';

export default function MeditationDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const player = useAudioPlayer(audio);
    const status = useAudioPlayerStatus(player);

    const meditation = meditations.find((m) => m.id === Number(id));

    const formatSeconds = (milliseconds: number) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000)/ 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
    
    if (!meditation) {
        return <Text> Meditation not found! </Text>
    }

    return (
        <SafeAreaView className="bg-orange-400 flex-1 p-2 justify-between">
            <View className="flex-1">
                {/* Page content */}
                <View className="flex-1">
                    {/* Header */}
                    <View className="flex-row items-center justify-between p-10">
                        <Feather name="info" size={24} color="black" />

                        <View className="bg-zinc-900 p-2 rounded-md">
                            <Text className="text-zinc-100 font-semibold"> 
                                Todays Meditation 
                            </Text>
                        </View>

                        <AntDesign 
                            onPress={() => router.back()}
                            name="close" 
                            size={24} 
                            color="black" 
                        />
                    </View>

                    <Text className="text-3xl mt-10 text-center text-zinc font-semibold"> 
                        { meditation?.title }
                    </Text>;
                </View>

                {/** Play/ pause Button **/}
                <Pressable 
                    onPress={() => player.playing ? player.pause() : player.play()}
                    className="bg-zinc-800 self-center w-20 aspect-square rounded-full items-center justify-center">
                    
                    <FontAwesome name={status.playing ? 'pause': 'play'} 
                                size={24} 
                                color="snow" />
                </Pressable>

                {/** Bottom part of the screen **/}
                <View className="flex-1">
                    {/** Footer: Player **/}
                    <View className="p-5 mt-auto gap-5">
                        <View className="flex-row justify-between">
                            {/* <FontAwesome6 name="pause" size={24} color="#3A3937" /> */}
                            <Fontisto name="airplay" size={24} color="#3A3937" />
                            <FontAwesome name="cog" size={24} color="#3A3937" />
                        </View>

                        {/** Playback indicator **/}
                        <View>
                            <Slider
                                style={{width: '100%', height: 40}}
                                value= {status.currentTime / status.duration }
                                onSlidingComplete={(value) => player.seekTo(value * status.duration)}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="#3A3937"
                                maximumTrackTintColor="#3A393755"
                                thumbTintColor="#3A3937"
                                />
                        </View>

                        {/** Times **/}
                        <View className="flex-row justify-between">
                            <Text> { formatSeconds(status.currentTime) } </Text>
                            <Text> { formatSeconds(status.duration)} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}