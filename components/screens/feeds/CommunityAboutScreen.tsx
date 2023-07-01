import React from "react";
import { ScrollView, Text, useTheme, VStack } from "native-base";
import RenderMarkdown from "../../ui/markdown/RenderMarkdown";
import MImage from "../../ui/image/MImage";

function CommunityAboutScreen({ route }: { route: any }) {
  const theme = useTheme();

  return (
    <ScrollView flex={1} backgroundColor={theme.colors.app.bg}>
      <VStack>
        {route.params.banner && (
          <MImage
            source={{
              uri: route.params.banner,
            }}
            style={{ height: 200, width: "100%", opacity: 0.5 }}
          />
        )}
        <VStack p={4}>
          <Text fontSize="2xl" fontWeight="bold" underline>
            Description
          </Text>
          <RenderMarkdown text={route.params.description} />
        </VStack>
      </VStack>
    </ScrollView>
  );
}

export default CommunityAboutScreen;
