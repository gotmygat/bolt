# CloudChain Pay API Documentation

Complete API reference for CloudChain Pay payment gateway.

## Base URL

```
https://api.cloudchainpay.com/v1
```

## Authentication

All API requests require authentication using your API key in the Authorization header:

```bash
Authorization: Bearer your_api_key_here
```

Get your API key from the [Dashboard](https://cloudchainpay.com/app/dashboard).

## Rate Limiting

- **Rate Limit**: 100 requests per minute
- **Burst Limit**: 200 requests per minute
- Headers returned:
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Requests remaining
  - `X-RateLimit-Reset`: Time when limit resets (Unix timestamp)

## Errors

CloudChain Pay uses conventional HTTP response codes:

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid API key |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

### Error Response Format

```json
{
  "error": {
    "code": "invalid_request",
    "message": "Amount must be greater than 0",
    "param": "amount",
    "type": "validation_error"
  }
}
```

## Payments

### Create Payment

Create a new payment request.

**Endpoint:** `POST /payments`

**Request Body:**

```json
{
  "amount": "0.001",
  "currency": "BTC",
  "description": "Order #1234",
  "callbackUrl": "https://yoursite.com/webhook",
  "redirectUrl": "https://yoursite.com/success",
  "metadata": {
    "orderId": "1234",
    "customerId": "5678"
  },
  "expiresIn": 3600
}
```

**Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| amount | string | Yes | Payment amount |
| currency | string | Yes | Currency code (BTC, ETH, USDT, etc.) |
| description | string | No | Payment description |
| callbackUrl | string | No | Webhook URL for payment notifications |
| redirectUrl | string | No | URL to redirect after payment |
| metadata | object | No | Custom metadata (max 10 keys) |
| expiresIn | integer | No | Expiration time in seconds (default: 3600) |

**Response:**

```json
{
  "id": "pay_abc123def456",
  "status": "pending",
  "amount": "0.001",
  "currency": "BTC",
  "description": "Order #1234",
  "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  "qrCode": "https://api.cloudchainpay.com/qr/pay_abc123def456",
  "paymentUrl": "https://cloudchainpay.com/pay/pay_abc123def456",
  "expiresAt": "2024-01-01T12:00:00Z",
  "createdAt": "2024-01-01T11:00:00Z",
  "metadata": {
    "orderId": "1234",
    "customerId": "5678"
  }
}
```

**Example:**

```javascript
const response = await fetch('https://api.cloudchainpay.com/v1/payments', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: '0.001',
    currency: 'BTC',
    description: 'Order #1234',
    callbackUrl: 'https://yoursite.com/webhook'
  })
});

const payment = await response.json();
console.log(payment.address);
```

### Get Payment

Retrieve details of a specific payment.

**Endpoint:** `GET /payments/:id`

**Response:**

```json
{
  "id": "pay_abc123def456",
  "status": "completed",
  "amount": "0.001",
  "currency": "BTC",
  "description": "Order #1234",
  "address": "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  "txHash": "abc123def456789...",
  "confirmations": 3,
  "requiredConfirmations": 3,
  "amountReceived": "0.001",
  "expiresAt": "2024-01-01T12:00:00Z",
  "createdAt": "2024-01-01T11:00:00Z",
  "completedAt": "2024-01-01T11:30:00Z",
  "metadata": {
    "orderId": "1234",
    "customerId": "5678"
  }
}
```

**Payment Status:**

- `pending` - Waiting for payment
- `processing` - Payment received, awaiting confirmations
- `completed` - Payment confirmed
- `failed` - Payment failed or expired
- `refunded` - Payment refunded

**Example:**

```javascript
const response = await fetch('https://api.cloudchainpay.com/v1/payments/pay_abc123', {
  headers: {
    'Authorization': 'Bearer your_api_key'
  }
});

const payment = await response.json();
```

### List Payments

Get a list of all payments.

**Endpoint:** `GET /payments`

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| status | string | Filter by status (pending, completed, failed) |
| currency | string | Filter by currency |
| limit | integer | Number of results (max 100, default 10) |
| offset | integer | Pagination offset |
| startDate | string | Filter by creation date (ISO 8601) |
| endDate | string | Filter by creation date (ISO 8601) |

**Response:**

```json
{
  "data": [
    {
      "id": "pay_abc123",
      "status": "completed",
      "amount": "0.001",
      "currency": "BTC",
      "createdAt": "2024-01-01T11:00:00Z"
    }
  ],
  "hasMore": true,
  "total": 150
}
```

**Example:**

```javascript
const response = await fetch(
  'https://api.cloudchainpay.com/v1/payments?status=completed&limit=20',
  {
    headers: {
      'Authorization': 'Bearer your_api_key'
    }
  }
);

const { data, hasMore, total } = await response.json();
```

### Cancel Payment

Cancel a pending payment.

**Endpoint:** `DELETE /payments/:id`

**Response:**

```json
{
  "id": "pay_abc123",
  "status": "cancelled",
  "cancelledAt": "2024-01-01T11:45:00Z"
}
```

## Webhooks

CloudChain Pay sends webhooks for important payment events.

### Webhook Events

| Event | Description |
|-------|-------------|
| `payment.created` | Payment request created |
| `payment.pending` | Payment received, awaiting confirmations |
| `payment.confirmed` | Payment partially confirmed |
| `payment.completed` | Payment fully confirmed |
| `payment.failed` | Payment failed or expired |
| `payment.refunded` | Payment refunded |

### Webhook Payload

```json
{
  "id": "evt_abc123",
  "type": "payment.completed",
  "createdAt": "2024-01-01T11:30:00Z",
  "data": {
    "id": "pay_abc123",
    "status": "completed",
    "amount": "0.001",
    "currency": "BTC",
    "txHash": "abc123def456...",
    "confirmations": 3,
    "metadata": {
      "orderId": "1234"
    }
  }
}
```

### Webhook Signature Verification

All webhooks include an `X-CloudChain-Signature` header for verification:

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Express.js example
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-cloudchain-signature'];
  const webhookSecret = process.env.CLOUDCHAIN_WEBHOOK_SECRET;

  if (!verifyWebhook(req.body, signature, webhookSecret)) {
    return res.status(400).send('Invalid signature');
  }

  const event = JSON.parse(req.body);

  switch (event.type) {
    case 'payment.completed':
      // Handle completed payment
      handleCompletedPayment(event.data);
      break;
    case 'payment.failed':
      // Handle failed payment
      handleFailedPayment(event.data);
      break;
  }

  res.status(200).send('OK');
});
```

## Supported Currencies

Get list of supported cryptocurrencies.

**Endpoint:** `GET /currencies`

**Response:**

```json
{
  "data": [
    {
      "code": "BTC",
      "name": "Bitcoin",
      "symbol": "₿",
      "networks": ["bitcoin", "lightning"],
      "decimals": 8,
      "minAmount": "0.00001",
      "confirmations": 3
    },
    {
      "code": "ETH",
      "name": "Ethereum",
      "symbol": "Ξ",
      "networks": ["ethereum"],
      "decimals": 18,
      "minAmount": "0.001",
      "confirmations": 12
    }
  ]
}
```

## Exchange Rates

Get current exchange rates.

**Endpoint:** `GET /rates`

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| from | string | Source currency (optional) |
| to | string | Target currency (optional) |

**Response:**

```json
{
  "timestamp": "2024-01-01T11:00:00Z",
  "rates": {
    "BTC": {
      "USD": 45000.00,
      "EUR": 38000.00,
      "ETH": 15.5
    },
    "ETH": {
      "USD": 2900.00,
      "BTC": 0.064
    }
  }
}
```

## Account Information

Get your account information.

**Endpoint:** `GET /account`

**Response:**

```json
{
  "id": "acc_abc123",
  "email": "user@example.com",
  "status": "active",
  "balance": {
    "BTC": "0.05",
    "ETH": "1.5"
  },
  "limits": {
    "daily": "10.0",
    "monthly": "100.0"
  },
  "createdAt": "2023-01-01T00:00:00Z"
}
```

## SDK Examples

### Node.js

```javascript
const CloudChain = require('cloudchain-pay');

const client = new CloudChain({
  apiKey: 'your_api_key'
});

// Create payment
const payment = await client.payments.create({
  amount: '0.001',
  currency: 'BTC',
  description: 'Order #1234'
});

// Get payment
const payment = await client.payments.get('pay_abc123');

// List payments
const payments = await client.payments.list({
  status: 'completed',
  limit: 10
});
```

### Python

```python
import cloudchainpay

client = cloudchainpay.Client(api_key='your_api_key')

# Create payment
payment = client.payments.create(
    amount='0.001',
    currency='BTC',
    description='Order #1234'
)

# Get payment
payment = client.payments.get('pay_abc123')

# List payments
payments = client.payments.list(status='completed', limit=10)
```

### PHP

```php
<?php
require 'vendor/autoload.php';

$client = new CloudChainPay\Client('your_api_key');

// Create payment
$payment = $client->payments->create([
    'amount' => '0.001',
    'currency' => 'BTC',
    'description' => 'Order #1234'
]);

// Get payment
$payment = $client->payments->get('pay_abc123');

// List payments
$payments = $client->payments->all([
    'status' => 'completed',
    'limit' => 10
]);
```

## Testing

Use test mode for development:

**Test API Key:** Starts with `test_`
**Test Base URL:** `https://api-test.cloudchainpay.com/v1`

Test mode features:
- No real transactions
- Instant confirmations
- Test webhook events
- Sandbox environment

## Support

- **API Status**: [status.cloudchainpay.com](https://status.cloudchainpay.com)
- **Email**: api@cloudchainpay.com
- **Documentation**: [cloudchainpay.com/docs](https://cloudchainpay.com/docs)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for API version history and updates.
