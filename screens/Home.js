import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function Home({ navigation }) {
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text variant="displaySmall">Welcome! </Text>
                <Text variant="headlineSmall">This is the homepage </Text>
                <StatusBar style="auto" />
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                    Go to About page
                </Button>

                <Card>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
