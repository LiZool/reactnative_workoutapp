import React from "react";
import { Text, View, Pressable } from "react-native";
import { Link } from 'expo-router';
import { Meditation } from "@/types";
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

export function MeditationListItem({ meditation }: { meditation: Meditation }) {
    return (
        <Link href={`/meditation/${meditation.id}`} asChild>
            <Pressable className="flex-row items-center gap-5">
                <View className="bg-green-700 p-1 rounded-full">
                    <Entypo name="check" size={24} color="white" />
                </View>

                <View className="flex-1 p-5 py-8 border-2 border-gray-300 rounded-2xl">
                    <Text className="font-semibold text-2xl"> 
                        { meditation.title }
                    </Text>

                    <View className="flex-row items-center gap-2">
                        <Feather name="clock" size={18} color="dimgrey" />
                        <Text className="text-gray-600">
                            {meditation.duration} min
                        </Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    ) 
}