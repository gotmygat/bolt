# CloudChain Pay

> The most secure and decentralized cryptocurrency payment gateway with just 0.8% fees.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/cloudchainpay/cloudchainpay)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()

## 🚀 Quick Start

CloudChain Pay is a decentralized payment gateway that allows you to accept cryptocurrency payments directly to your wallet. No KYC, no intermediaries, just 0.8% fees.

```bash
# Install the SDK
npm install cloudchain-pay

# or
yarn add cloudchain-pay
```

## ⚡ Features

- **🔒 Decentralized**: No third-party services, payments go directly to your wallet
- **💰 Low Fees**: Only 0.8% transaction fee, no hidden costs
- **⚡ Lightning Fast**: Ultra-fast Bitcoin payments via Lightning Network
- **🌍 Multi-Currency**: Support for Bitcoin, Ethereum, USDT, and 50+ cryptocurrencies
- **🔐 Secure**: Bank-level encryption and security practices
- **🔌 Easy Integration**: Plugins for WooCommerce, Shopify, OpenCart, and more
- **📊 Analytics**: Real-time transaction monitoring and reporting
- **🌐 Global**: Accept payments from anywhere in the world

## 📋 Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Supported Cryptocurrencies](#supported-cryptocurrencies)
- [Platform Integrations](#platform-integrations)
- [API Documentation](#api-documentation)
- [Examples](#examples)
- [Security](#security)
- [Support](#support)

## 🔧 Installation

### Node.js / JavaScript

```bash
npm install cloudchain-pay
```

### WooCommerce

1. Download the CloudChain Pay plugin
2. Upload to `/wp-content/plugins/` directory
3. Activate through the 'Plugins' menu in WordPress
4. Configure your settings in WooCommerce → Settings → Payments

### Shopify

1. Visit the Shopify App Store
2. Search for "CloudChain Pay"
3. Click "Add app" and authorize
4. Configure your wallet addresses

## 🎯 Getting Started

### 1. Create an Account

Sign up at [cloudchainpay.com](https://cloudchainpay.com/app/signup) and get your API keys.

### 2. Initialize the Client

```javascript
import CloudChainPay from 'cloudchain-pay';

const cloudchain = new CloudChainPay({
  apiKey: 'your_api_key_here',
  network: 'mainnet' // or 'testnet'
});
```

### 3. Create a Payment

```javascript
const payment = await cloudchain.payments.create({
  amount: '0.001',
  currency: 'BTC',
  description: 'Product purchase',
  callbackUrl: 'https://yoursite.com/callback'
});

console.log(payment.address); // Bitcoin address
console.log(payment.qrCode);  // QR code URL
```

## 💎 Supported Cryptocurrencies

- Bitcoin (BTC) - Including Lightning Network
- Ethereum (ETH)
- Tether (USDT) - Ethereum, BSC, Tron
- USD Coin (USDC)
- Binance Coin (BNB)
- Ripple (XRP)
- Dogecoin (DOGE)
- ERC-20 & BEP-20 Tokens

**Plus 40+ more cryptocurrencies!**

## 📚 API Documentation

Full API documentation available at [cloudchainpay.com/docs](https://cloudchainpay.com/docs)

### Authentication

```
Authorization: Bearer your_api_key
```

### Create Payment

```bash
POST /v1/payments
```

### Get Payment

```bash
GET /v1/payments/:id
```

### List Payments

```bash
GET /v1/payments
```

## 💰 Pricing

- **Transaction Fee**: 0.8%
- **First $125**: FREE
- **No Hidden Fees**: No withdrawal fees, no monthly charges

[View Full Pricing →](https://cloudchainpay.com/pricing)

## 📞 Support

- **Email**: support@cloudchainpay.com
- **Hours**: Monday - Saturday, 9AM - 11PM
- **Documentation**: [docs.cloudchainpay.com](https://cloudchainpay.com/docs)

---

<div align="center">
  <strong>Made with ❤️ by the CloudChain Pay Team</strong>
</div>
