const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Achievers Backend is running' });
});

// Proxy endpoint for Tango MCP catalog
app.get('/api/catalog', async (req, res) => {
  try {
    // Since the Tango MCP server is integrated via MCP tools, 
    // we'll simulate the response with the data structure we know works
    // In a real implementation, this would make the actual MCP call
    
    console.log('Fetching catalog from Tango MCP...');
    
    // Simulate the response structure from our successful MCP test
    const mockCatalogResponse = {
      "catalogName": "Digital Gift Card Catalog",
      "brands": [
        {
          "brandKey": "B916708",
          "brandName": "Amazon.com",
          "disclaimer": "Restrictions apply, see amazon.com/gc-legal",
          "description": "Use your Amazon.com Gift Card towards Books, Electronics, Music, and more. The Amazon.com web site is the place to find and discover almost any thing you want to buy online at a great price.",
          "shortDescription": "Amazon.com Gift Cards never expire and can be redeemed towards millions of items at www.amazon.com.",
          "imageUrls": {
            "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-80w-326ppi.png",
            "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-130w-326ppi.png",
            "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-200w-326ppi.png",
            "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-278w-326ppi.png"
          },
          "status": "active",
          "items": [
            {
              "utid": "U163059",
              "rewardName": "Amazon eGift Card",
              "currencyCode": "USD",
              "status": "active",
              "valueType": "VARIABLE_VALUE",
              "rewardType": "gift card",
              "isExpirable": false,
              "minValue": 0.01,
              "maxValue": 2000,
              "fulfillmentType": "DIGITAL",
              "countries": ["US"]
            }
          ],
          "categories": [
            {
              "identifier": "e1a13abc-be00-4ff3-bb19-36d68b57cda0",
              "description": "Marketplaces & Department Stores"
            }
          ]
        },
        {
          "brandKey": "B942204",
          "brandName": "Starbucks",
          "disclaimer": "The Starbucks word mark and the Starbucks Logo are trademarks of Starbucks Corporation.",
          "description": "A Starbucks Card can bring a little goodness into everyone's day. Whether you want to cheer up a friend who loves her morning mocha. Or reward yourself with your favorite flavored iced tea.",
          "shortDescription": "A Starbucks Card can bring a little goodness into everyone's day.",
          "imageUrls": {
            "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-80w-326ppi.png",
            "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-130w-326ppi.png",
            "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-200w-326ppi.png",
            "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-278w-326ppi.png"
          },
          "status": "active",
          "items": [
            {
              "utid": "U761382",
              "rewardName": "Starbucks Card",
              "currencyCode": "USD",
              "status": "active",
              "valueType": "VARIABLE_VALUE",
              "rewardType": "gift card",
              "isExpirable": false,
              "minValue": 5.0,
              "maxValue": 500.0,
              "fulfillmentType": "DIGITAL",
              "countries": ["US"]
            }
          ],
          "categories": [
            {
              "identifier": "b0708bc7-7a2d-411e-93d6-6b25abd927c6",
              "description": "Beverage"
            }
          ]
        },
        {
          "brandKey": "B440379",
          "brandName": "Apple IT",
          "disclaimer": "Valid only for transactions involving Apple properties in Italy.",
          "description": "Use Apple Gift Card to get products, accessories, apps, games, music, movies, TV shows and more. Spend it at any Apple Store location, in the App Store, or on subscriptions like music, iCloud+ and more.",
          "shortDescription": "Use Apple Gift Card to get products, accessories, apps, games, music, movies, TV shows and more.",
          "imageUrls": {
            "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-80w-326ppi.png",
            "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-130w-326ppi.png",
            "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-200w-326ppi.png",
            "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-278w-326ppi.png"
          },
          "status": "active",
          "items": [
            {
              "utid": "U468761",
              "rewardName": "Apple IT eGift",
              "currencyCode": "EUR",
              "status": "active",
              "valueType": "VARIABLE_VALUE",
              "rewardType": "gift card",
              "isExpirable": false,
              "minValue": 2,
              "maxValue": 250,
              "fulfillmentType": "DIGITAL",
              "countries": ["IT"]
            }
          ],
          "categories": [
            {
              "identifier": "166dbd79-ebef-4f26-8e30-b79077c1d6c4",
              "description": "Digital Media"
            }
          ]
        },
        {
          "brandKey": "B912569",
          "brandName": "Deposit to PayPal",
          "disclaimer": "Real-time funding is subject to the restrictions and limitations of your account issuer.",
          "description": "Redeem balance directly into your PayPal account once you have logged into your account. Funds are usually available within 30 minutes.",
          "shortDescription": "Direct deposit to your PayPal account",
          "imageUrls": {
            "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-80w-326ppi.png",
            "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-130w-326ppi.png",
            "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-200w-326ppi.png",
            "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-278w-326ppi.png"
          },
          "status": "active",
          "items": [
            {
              "utid": "U781792",
              "rewardName": "Deposit to PayPal",
              "currencyCode": "USD",
              "status": "active",
              "valueType": "VARIABLE_VALUE",
              "rewardType": "payment-paypal",
              "isExpirable": false,
              "minValue": 1,
              "maxValue": 2000,
              "fulfillmentType": "DIGITAL",
              "countries": ["US"]
            }
          ],
          "categories": [
            {
              "identifier": "f83ec3c6-86e3-4316-9419-1beeae7895d1",
              "description": "Prepaid & Cash Transfer"
            }
          ]
        }
      ]
    };

    // Add a small delay to simulate real API call
    await new Promise(resolve => setTimeout(resolve, 500));

    res.json(mockCatalogResponse);
    
  } catch (error) {
    console.error('Error fetching catalog:', error);
    res.status(500).json({ 
      error: 'Failed to fetch catalog',
      message: error.message 
    });
  }
});

// Placeholder endpoint for future order placement
app.post('/api/orders', async (req, res) => {
  try {
    console.log('Order placement request:', req.body);
    
    // For now, just return a success message
    // In a real implementation, this would call the Tango MCP Create_Order endpoint
    res.json({
      success: true,
      message: 'Order placement feature coming soon!',
      orderId: `ORDER-${Date.now()}`,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ 
      error: 'Failed to place order',
      message: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Achievers Backend running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🎁 Catalog API: http://localhost:${PORT}/api/catalog`);
});
