import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { ResizeMode, Video } from "expo-av";
import { images } from "../../constants";
import useAppwrite from "../../../lib/useAppWrite";
import { getAllPosts, getLatestPosts } from "../../../lib/appwrite";
// import { SearchInput, Trending, VideoCard } from "@/components";
import EmptyState from "../../components/Empty";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import VideoCard from "../../components/VideoCard";
import { useGlobalContext } from "@/context/GlobalProvider";
const Home = () => {
  const { data: posts, refetch:refreshAllPosts } = useAppwrite(getAllPosts);
  const { data: latestPosts, refetch: refreshLatestPosts } =
    useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const { user } = useGlobalContext();

  console.log(user);

  const onRefresh = async () => {
    setRefreshing(true);
    await refreshAllPosts();
    await refreshLatestPosts();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
      <View style={{ flex: 1 }} className="bg-primary">
        <FlatList
          data={posts}
          keyExtractor={(item) => item.$id}
          renderItem={({ item }) => (
            <VideoCard
              title={item.title}
              thumbnail={item.thumbnail}
              video={item.video}
              creator={item.creator.username}
              avatar={item.creator.avatar}
            />
          )}
          ListHeaderComponent={() => (
            <View
              style={{ marginVertical: 24, paddingHorizontal: 16, gap: 24 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 24,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 14,
                      color: "#b0b0b0",
                    }}
                  >
                    Welcome Back
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: "600",
                      color: "#ffffff",
                    }}
                  >
                   {user.username}
                  </Text>
                </View>

                <View style={{ marginTop: 6 }}>
                  <Image
                    source={images.logoSmall}
                    style={{ width: 36, height: 40 }}
                    resizeMode="contain"
                  />
                </View>
              </View>

              <SearchInput />

              <View
                style={{
                  width: "100%",
                  flex: 1,
                  paddingTop: 20,
                  paddingBottom: 32,
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "400",
                    color: "#b0b0b0",
                    marginBottom: 12,
                  }}
                >
                  Latest Videos
                </Text>

                <Trending posts={latestPosts ?? []} />
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Videos Found"
              subtitle="No videos created yet"
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
