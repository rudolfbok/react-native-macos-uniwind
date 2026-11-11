import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import './global.css';

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<View className="flex-1 items-center justify-center gap-6 bg-background p-6">
			<Text className="text-3xl font-bold text-foreground">React Native macOS</Text>
			<Text className="text-muted-foreground">Uniwind · TypeScript</Text>
			<Pressable
				accessibilityRole="button"
				onPress={() => setCount((c) => c + 1)}
				className="min-h-11 items-center justify-center rounded-ui bg-primary px-5 active:opacity-80"
			>
				<Text className="text-base font-semibold text-primary-foreground">Pressed {count}×</Text>
			</Pressable>
		</View>
	);
};

export default App;
