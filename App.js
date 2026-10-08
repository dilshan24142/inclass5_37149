import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { profile } from './src/profile';

function initials(name) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[1][0] : '')).toUpperCase();
}

function Avatar({ name }) {
  return (
    <View style={styles.avatarOuter}>
      <View style={styles.avatarInner}>
        <Text style={styles.avatarText}>{initials(name)}</Text>
      </View>
      <View style={styles.badge}>
        <MaterialIcons name="check" size={30} color="#22e622" />
      </View>
    </View>
  );
}

function Field({ label, value, icon }) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueRow}>
        {icon && <MaterialIcons name={icon} size={24} color="#000" style={styles.icon} />}
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeTop} edges={['top']}>
        <View style={styles.appBar}>
          <Text style={styles.title}>My Profile</Text>
        </View>
      </SafeAreaView>

      <View style={styles.body}>
        <ScrollView contentContainerStyle={styles.content}>
          <Avatar name={profile.name} />
          <View style={styles.divider} />
          <Field label="Name" value={profile.name} />
          <Field label="Student ID" value={profile.studentId} icon="badge" />
          <Field label="Email" value={profile.email} icon="email" />
          <Field label="University" value={profile.university} icon="school" />
          <Field label="Points" value={String(points)} icon="star" />
        </ScrollView>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Add a point"
          onPress={() => setPoints((p) => p + 1)}
          style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
        >
          <MaterialIcons name="add" size={30} color="#fff" />
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeTop: { backgroundColor: '#000' },
  appBar: {
    height: 56,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  title: { color: '#fff', fontSize: 22, fontWeight: '500' },
  body: { flex: 1, backgroundColor: '#f4f4f4' },
  content: { padding: 24, paddingBottom: 100 },
  avatarOuter: {
    alignSelf: 'center',
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInner: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#f28b82',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#fff', fontSize: 34, fontWeight: '700' },
  badge: { position: 'absolute', right: 22, bottom: 22 },
  divider: { height: 2, backgroundColor: '#000', marginVertical: 10 },
  field: { marginTop: 18 },
  label: { fontSize: 20, fontWeight: '700', color: '#000' },
  valueRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  icon: { marginRight: 14 },
  value: { fontSize: 19, color: '#222', flexShrink: 1 },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 32,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  fabPressed: { opacity: 0.8 },
});
