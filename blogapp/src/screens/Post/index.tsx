import { useState, useRef } from "react";
import { useWindowDimensions, View, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { ProgressBar } from "../../components/ProgressBar";
import { Container, Title, PostText, Content } from "./styles";

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };

  contentOffset: {
    y: number;
  };

  contentSize: {
    height: number;
  };
};

export function Post() {
  const [percentage, setPercentage] = useState(0);
  const window = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);

  function scrollPercentage({
    contentOffset,
    contentSize,
    layoutMeasurement,
  }: ScrollProps) {
    const visibleContent = Math.ceil(
      (window.height / contentSize.height) * 100
    );

    const value = Math.round(
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100
    );

    setPercentage(value <= visibleContent ? 0 : value);
  }

  function goToTop() {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }

  return (
    <Container>
      <Content
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        StickyHeaderComponent={Header}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
        ref={scrollRef}
      >
        <Header />
        <Title>Hello, World</Title>

        <PostText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          adipisci dignissimos molestiae quo aliquid quibusdam eius aspernatur
          exercitationem quod impedit. Quasi, repudiandae nam officiis adipisci
          animi minima nihil error! Tempora.
        </PostText>

        <View>
          <PostText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            adipisci dignissimos molestiae quo aliquid quibusdam eius aspernatur
            exercitationem quod impedit. Quasi, repudiandae nam officiis
            adipisci animi minima nihil error! Tempora. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptates adipisci dignissimos
            molestiae quo aliquid quibusdam eius aspernatur exercitationem quod
            impedit. Quasi, repudiandae nam officiis adipisci animi minima nihil
            error! Tempora.
          </PostText>

          <PostText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            adipisci dignissimos molestiae quo aliquid quibusdam eius aspernatur
            exercitationem quod impedit. Quasi, repudiandae nam officiis
            adipisci animi minima nihil error! Tempora. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptates adipisci dignissimos
            molestiae quo aliquid quibusdam eius aspernatur exercitationem quod
            impedit. Quasi, repudiandae nam officiis adipisci animi minima nihil
            error! Tempora. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptates adipisci dignissimos molestiae quo aliquid
            quibusdam eius aspernatur exercitationem quod impedit. Quasi,
            repudiandae nam officiis adipisci animi minima nihil error! Tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            adipisci dignissimos molestiae quo aliquid quibusdam eius aspernatur
            exercitationem quod impedit. Quasi, repudiandae nam officiis
            adipisci animi minima nihil error! Tempora. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptates adipisci dignissimos
            molestiae quo aliquid quibusdam eius aspernatur exercitationem quod
            impedit. Quasi, repudiandae nam officiis adipisci animi minima nihil
            error! Tempora. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptates adipisci dignissimos molestiae quo aliquid
            quibusdam eius aspernatur exercitationem quod impedit. Quasi,
            repudiandae nam officiis adipisci animi minima nihil error! Tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            adipisci dignissimos molestiae quo aliquid quibusdam eius aspernatur
            exercitationem quod impedit. Quasi, repudiandae nam officiis
            adipisci animi minima nihil error! Tempora. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptates adipisci dignissimos
            molestiae quo aliquid quibusdam eius aspernatur exercitationem quod
            impedit. Quasi, repudiandae nam officiis adipisci animi minima nihil
            error! Tempora. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptates adipisci dignissimos molestiae quo aliquid
            quibusdam eius aspernatur exercitationem quod impedit. Quasi,
            repudiandae nam officiis adipisci animi minima nihil error! Tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            adipisci dignissimos molestiae quo aliquid quibusdam eius aspernatur
            exercitationem quod impedit. Quasi, repudiandae nam officiis
            adipisci animi minima nihil error! Tempora. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptates adipisci dignissimos
            molestiae quo aliquid quibusdam eius aspernatur exercitationem quod
            impedit. Quasi, repudiandae nam officiis adipisci animi minima nihil
            error! Tempora. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptates adipisci dignissimos molestiae quo aliquid
            quibusdam eius aspernatur exercitationem quod impedit. Quasi,
            repudiandae nam officiis adipisci animi minima nihil error! Tempora.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            adipisci dignissimos molestiae quo aliquid quibusdam eius aspernatur
            exercitationem quod impedit. Quasi, repudiandae nam officiis
            adipisci animi minima nihil error! Tempora. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptates adipisci dignissimos
            molestiae quo aliquid quibusdam eius aspernatur exercitationem quod
            impedit. Quasi, repudiandae nam officiis adipisci animi minima nihil
            error! Tempora.
          </PostText>
        </View>
      </Content>

      <ProgressBar value={percentage} onPress={goToTop} />
    </Container>
  );
}
