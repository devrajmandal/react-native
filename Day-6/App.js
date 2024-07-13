import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignupPage, setIsSignupPage] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showGetStarted, setShowGetStarted] = useState(true); // State to manage showing get started page

  const handleLoginPress = () => {
    if (username.length > 0 && password.length > 0) {
      // Simulate login success
      console.log("Login is working");
      setIsLoggedIn(true);
      setShowGetStarted(false); // Hide get started page after login
    } else {
      Alert.alert('Error', 'Please enter username and password.');
    }
  };

  const handleSignupPress = () => {
    if (username.length > 0 && password.length > 0 && password === confirmPassword) {
      // Simulate signup success
      console.log("Signup is working");
      setIsLoggedIn(true);
      setShowGetStarted(false); // Hide get started page after signup
    } else {
      Alert.alert('Error', 'Please enter username, password, and confirm password correctly.');
    }
  };

  const handleLogoutPress = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setShowGetStarted(true); // Show get started page after logout
  };

  const onTextChanged = (text, type) => {
    if (type === 'username') setUsername(text);
    if (type === 'password') setPassword(text);
    if (type === 'confirmPassword') setConfirmPassword(text);
  };

  const renderGetStartedPage = () => {
    return (
      <View style={styles.container}>
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Welcome to Your App!</Text>
          <Text style={styles.getStartedText}>Get started by logging in or signing up.</Text>
          <Button title="Login" onPress={() => setShowGetStarted(false)} />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showGetStarted && renderGetStartedPage()}

      {!isLoggedIn && !showGetStarted && (
        !isSignupPage ? (
          <View style={styles.formContainer}>
            <Text style={styles.headerText}>Login Page</Text>
            <TextInput
              placeholder='Enter your Username'
              value={username}
              onChangeText={(text) => onTextChanged(text, 'username')}
              style={styles.input}
            />
            <TextInput
              placeholder='Enter your Password'
              value={password}
              onChangeText={(text) => onTextChanged(text, 'password')}
              secureTextEntry={true}
              style={styles.input}
            />
            <Button title='Login' color='blue' onPress={handleLoginPress} />
            <Button title='Go to Signup' color='green' onPress={() => setIsSignupPage(true)} />
          </View>
        ) : (
          <View style={styles.formContainer}>
            <Text style={styles.headerText}>Signup Page</Text>
            <TextInput
              placeholder='Enter your Username'
              value={username}
              onChangeText={(text) => onTextChanged(text, 'username')}
              style={styles.input}
            />
            <TextInput
              placeholder='Enter your Password'
              value={password}
              onChangeText={(text) => onTextChanged(text, 'password')}
              secureTextEntry={true}
              style={styles.input}
            />
            <TextInput
              placeholder='Confirm your Password'
              value={confirmPassword}
              onChangeText={(text) => onTextChanged(text, 'confirmPassword')}
              secureTextEntry={true}
              style={styles.input}
            />
            <Button title='Signup' color='blue' onPress={handleSignupPress} />
            <Button title='Go to Login' color='green' onPress={() => setIsSignupPage(false)} />
          </View>
        )
      )}

      {isLoggedIn && !showGetStarted && (
        <View style={styles.loggedInContainer}>
          <Text style={styles.loggedInText}>Welcome, {username}!</Text>
          <Button title='Logout' color='red' onPress={handleLogoutPress} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  getStartedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  getStartedText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    height: 50,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  loggedInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
  },
});