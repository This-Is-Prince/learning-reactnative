import ActionCard from '@/components/ActionCard';
import ElevatedCards from '@/components/ElevatedCards';
import FancyCard from '@/components/FancyCard';
import FlatCards from '@/components/FlatCards';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 16
  }
})