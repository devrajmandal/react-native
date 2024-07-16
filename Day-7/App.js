import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Button, FlatList, Image } from 'react-native';
import styles from './styles';

const App = () => {
  const [page, setPage] = useState('gettingStarted');
  const [userDetails, setUserDetails] = useState({});
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '', email: '' });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const handleSignUpChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleLoginChange = (name, value) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const signUp = () => {
    const { username, password, confirmPassword, email } = form;

    if (!username) {
      Alert.alert('Error', 'Username is must');
      return;
    }
    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Password and confirm password are must');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Invalid Password');
      return;
    }

    setUserDetails({ username, password, email });
    setForm({ username: '', password: '', confirmPassword: '', email: '' });
    setPage('login');
  };

  const login = () => {
    const { username, password } = loginForm;

    if (!username) {
      Alert.alert('Error', 'Username is must');
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Password is must');
      return;
    }

    if (username === userDetails.username && password === userDetails.password) {
      setPage('welcome');
      Alert.alert('Login successful');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  const logout = () => {
    setPage('gettingStarted');
    setLoginForm({ username: '', password: '' });
  };

  const products = [
    {
      id: '1',
      title: 'Cloth',
      description: 'Men Graphic Print Round Neck Cotton Blend Black T-Shirt',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/4/4/i/xxl-mlm-arn-black-50-teddytshirt-r-scott-fincher-original-imah2362by7fjrs5.jpeg?q=70',
      price: '$54'
    },
    {
      id: '2',
      title: 'Watch',
      description: 'Analog Watch - For Men PE000017C',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/o/v/o/-original-imagrk9ry8qzzbaf.jpeg?q=70',
      price: '$941'
    },
    {
      id: '3',
      title: 'Sneaker',
      description: 'Supernova Sneakers For Men  (Yellow , 9)',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/h/f/a/9-rkt-a271-limeyellow-9-atom-yellow-original-imahfptu9jrfpfqg.jpeg?q=70',
      price: '$199'
    }
  ];
  
  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  );
  

  return (
    <View style={styles.container}>
      {page === 'gettingStarted' && (
        <View style={styles.page}>
          <Text style={styles.title}>Getting Started</Text>
          <Button title="Get Started" onPress={() => setPage('signUp')} />
        </View>
      )}

      {page === 'signUp' && (
        <View style={styles.page}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={form.username}
            onChangeText={(value) => handleSignUpChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => handleSignUpChange('password', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={(value) => handleSignUpChange('confirmPassword', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={form.email}
            onChangeText={(value) => handleSignUpChange('email', value)}
          />
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={signUp}>
            <Text style={styles.buttonText}>Register yourself!</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 'login' && (
        <View style={styles.page}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={loginForm.username}
            onChangeText={(value) => handleLoginChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={loginForm.password}
            onChangeText={(value) => handleLoginChange('password', value)}
          />
          <Button title="Login" onPress={login} />
        </View>
      )}

      {page === 'welcome' && (
        <View style={styles.page}>
          <Text style={styles.title}>Welcome, {userDetails.username}!</Text>
          <Text style={styles.welcomeText}>Welcome to the app!</Text>
          <Button title="Go to Product Page" onPress={() => setPage('product')} style={styles.buttonSpacing} />
          <View style={styles.buttonSpacing} />
          <Button title="Logout" onPress={logout} style={styles.buttonSpacing} />
        </View>
      )}

      {page === 'product' && (
        <View style={styles.page}>
          <Text style={styles.title}>Products for {userDetails.username}</Text>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
          />
          <Button title="Logout" onPress={logout} />
        </View>
      )}
    </View>
  );
};

export default App;