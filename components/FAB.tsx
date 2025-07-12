import { Text, Pressable, StyleSheet } from "react-native";

interface FABProps {
  label: string;
  position?: "left" | "right" | "";

  //Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  position,
  onPress,
  onLongPress,
}: FABProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === "left"
          ? styles.positionLeft
          : position === "right"
          ? styles.positionRight
          : "",
        pressed && { opacity: 0.8 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ fontSize: 20, color: "white" }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65588F",
    borderRadius: 12,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
});
