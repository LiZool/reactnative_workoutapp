import React from "react";
import { FlatList } from "react-native";
import { exercises } from "@/data";
import { ExerciseListItem } from "@/components/ExerciseListItem";

export default function HomeScreen() {
    return ( 
        <FlatList 
            data={exercises} 
            className="bg-white"
            contentContainerClassName="gap-8 p-3"
            renderItem={({ item }) => <ExerciseListItem exercise={item} />} 
        />
    );
}