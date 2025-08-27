import React, { useState, useEffect } from 'react';

// Raw JSON response from Tango MCP server
const TANGO_CATALOG_RAW = {
  "catalogName": "Don_Testd6c0e6dc-6ed2-4013-a305-47785fe30cf8",
  "brands": [
    {
      "brandKey": "B644898",
      "brandName": "Amazon.co.uk",
      "disclaimer": "<p>*Restrictions apply. For complete terms and conditions, visit: <a href=\"http://www.amazon.co.uk/gc-legal\">www.amazon.co.uk/gc-legal</a>.</p>\r\n",
      "description": "<p>Amazon.co.uk Gift Cards* can be redeemed towards millions of items at www.amazon.co.uk.</p>\r\n",
      "shortDescription": "<p>Amazon.co.uk Gift Cards* can be redeemed towards millions of items at <a href=\"http://www.amazon.co.uk\">www.amazon.co.uk</a>.</p>\r\n",
      "imageUrls": {
        "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-80w-326ppi.png",
        "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-130w-326ppi.png",
        "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-200w-326ppi.png",
        "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-278w-326ppi.png",
        "300w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-300w-326ppi.png",
        "1200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b314742-1200w-326ppi.png"
      },
      "status": "active",
      "items": [
        {
          "utid": "U173016",
          "rewardName": "Amazon.co.uk Gift Card",
          "currencyCode": "GBP",
          "status": "active",
          "valueType": "VARIABLE_VALUE",
          "rewardType": "gift card",
          "minValue": 0.01,
          "maxValue": 1000,
          "fulfillmentType": "DIGITAL"
        }
      ]
    },
    {
      "brandKey": "B916708",
      "brandName": "Amazon.com",
      "disclaimer": "<p>Restrictions apply, see <a href=\"https://www.amazon.com/gp/help/customer/display.html\">amazon.com/gc-legal</a></p>",
      "description": "<p>Use your <a href=\"http://amazon.com/\">Amazon.com</a> Gift Card* towards Books, Electronics, Music, and more.</p>",
      "shortDescription": "<p><a href=\"http://amazon.com/\">Amazon.com</a> Gift Cards* never expire and can be redeemed towards millions of items.</p>",
      "imageUrls": {
        "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-80w-326ppi.png",
        "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-130w-326ppi.png",
        "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-200w-326ppi.png",
        "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-278w-326ppi.png",
        "300w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-300w-326ppi.png",
        "1200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b916708-1200w-326ppi.png"
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
          "minValue": 0.01,
          "maxValue": 2000,
          "fulfillmentType": "DIGITAL"
        }
      ]
    },
    {
      "brandKey": "B440379",
      "brandName": "Apple IT",
      "description": "<p>Use Apple Gift Card to get products, accessories, apps, games, music, movies, TV shows and more.</p>",
      "shortDescription": "<p>Use Apple Gift Card to get products, accessories, apps, games, music, movies, TV shows and more.</p>",
      "imageUrls": {
        "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-80w-326ppi.png",
        "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-130w-326ppi.png",
        "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-200w-326ppi.png",
        "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-278w-326ppi.png",
        "300w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-300w-326ppi.png",
        "1200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b440379-1200w-326ppi.png"
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
          "minValue": 2,
          "maxValue": 250,
          "fulfillmentType": "DIGITAL"
        }
      ]
    },
    {
      "brandKey": "B942204",
      "brandName": "Starbucks",
      "description": "<p>A Starbucks Card can bring a little goodness into everyone's day. Redeem it at thousands of Starbucks locations.</p>",
      "shortDescription": "<p>A Starbucks Card can bring a little goodness into everyone's day.</p>",
      "imageUrls": {
        "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-80w-326ppi.png",
        "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-130w-326ppi.png",
        "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-200w-326ppi.png",
        "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-278w-326ppi.png",
        "300w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-300w-326ppi.png",
        "1200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b942204-1200w-326ppi.png"
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
          "minValue": 5.0,
          "maxValue": 500.0,
          "fulfillmentType": "DIGITAL"
        }
      ]
    },
    {
      "brandKey": "B912569",
      "brandName": "Deposit to PayPal",
      "description": "<p>Redeem balance directly into your PayPal account once you have logged into your account. Funds are usually available within 30 minutes.</p>",
      "shortDescription": "<p>Redeem balance directly into your PayPal account.</p>",
      "imageUrls": {
        "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-80w-326ppi.png",
        "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-130w-326ppi.png",
        "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-200w-326ppi.png",
        "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-278w-326ppi.png",
        "300w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-300w-326ppi.png",
        "1200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b912569-1200w-326ppi.png"
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
          "minValue": 1,
          "maxValue": 2000,
          "fulfillmentType": "DIGITAL"
        }
      ]
    },
    {
      "brandKey": "B266419",
      "brandName": "Virtual Promotional Prepaid Mastercard",
      "description": "<p>Your Virtual Promotional Prepaid Mastercard can be used online at merchants where Debit Mastercard is accepted.</p>",
      "shortDescription": "<p>Virtual Prepaid Mastercard for online shopping.</p>",
      "imageUrls": {
        "80w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b266419-80w-326ppi.png",
        "130w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b266419-130w-326ppi.png",
        "200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b266419-200w-326ppi.png",
        "278w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b266419-278w-326ppi.png",
        "300w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b266419-300w-326ppi.png",
        "1200w-326ppi": "https://dwwvg90koz96l.cloudfront.net/images/brands/b266419-1200w-326ppi.png"
      },
      "status": "active",
      "items": [
        {
          "utid": "U420079",
          "rewardName": "Virtual Promotional Prepaid Mastercard - USA & International Acceptance",
          "currencyCode": "USD",
          "status": "active",
          "valueType": "VARIABLE_VALUE",
          "rewardType": "cash equivalent",
          "minValue": 5,
          "maxValue": 1000,
          "fulfillmentType": "DIGITAL"
        }
      ]
    }
  ]
};

// Parse the raw catalog data into a JavaScript object
const parseCatalogData = () => {
  try {
    // TANGO_CATALOG_RAW is already a JavaScript object, no need to parse
    return TANGO_CATALOG_RAW;
  } catch (error) {
    console.error('Error accessing Tango catalog data:', error);
    return null;
  }
};

const Rewards = () => {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRewards();
  }, []);

  const fetchRewards = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Parse the raw Tango MCP catalog data
      const catalogData = parseCatalogData();
      
      if (!catalogData) {
        throw new Error('Failed to parse Tango catalog data');
      }
      
      // Process the catalog data to create a flat list of rewards
      const rewardItems = [];
      
      if (catalogData.brands) {
        catalogData.brands.forEach(brand => {
          if (brand.items && brand.items.length > 0) {
            brand.items.forEach(item => {
              if (item.fulfillmentType === 'DIGITAL' && item.status === 'active') {
                // Clean up HTML from descriptions
                const cleanDescription = brand.shortDescription ? 
                  brand.shortDescription.replace(/<[^>]*>/g, '') : 
                  brand.description ? brand.description.replace(/<[^>]*>/g, '') : '';
                
                rewardItems.push({
                  id: item.utid,
                  utid: item.utid,
                  name: item.rewardName,
                  brandName: brand.brandName,
                  description: cleanDescription,
                  image: brand.imageUrls ? brand.imageUrls['200w-326ppi'] : null,
                  minValue: item.minValue,
                  maxValue: item.maxValue,
                  currency: item.currencyCode,
                  type: item.rewardType,
                  disclaimer: brand.disclaimer
                });
              }
            });
          }
        });
      }

      // Filter out test/demo items for better user experience
      const filteredRewards = rewardItems.filter(reward => 
        !reward.brandName.toLowerCase().includes('test') &&
        !reward.brandName.toLowerCase().includes('demo') &&
        !reward.brandName.toLowerCase().includes('fail')
      );

      setRewards(filteredRewards);
    } catch (err) {
      console.error('Error processing rewards:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount, currency) => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency || 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(amount);
    } catch (e) {
      return `${currency || '$'}${amount}`;
    }
  };

  const getPointCost = (minValue, maxValue) => {
    // Convert currency to points (assuming 1 USD = 100 points for this demo)
    const pointsRatio = 100;
    const minPoints = Math.round(minValue * pointsRatio);
    const maxPoints = Math.round(maxValue * pointsRatio);
    
    if (minPoints === maxPoints) {
      return `${minPoints.toLocaleString()} pts`;
    }
    return `${minPoints.toLocaleString()} - ${maxPoints.toLocaleString()} pts`;
  };

  const handleRedeemClick = (reward) => {
    alert(`🎉 Demo: Redeeming ${reward.name}!\n\nThis is real catalog data from Tango MCP server!\n\nIn a full implementation, this would:\n• Connect to the Tango MCP server\n• Process the redemption\n• Send the gift card to your email\n\nPoints needed: ${getPointCost(reward.minValue, reward.maxValue)}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-workday-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading rewards catalog...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Rewards</h3>
          <p className="text-red-600 text-sm mb-4">{error}</p>
          <button 
            onClick={fetchRewards}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Rewards Catalog</h2>
          <p className="text-gray-600 mt-1">
            Redeem your points for amazing rewards from top brands • Powered by Tango MCP
          </p>
          <div className="mt-2 text-sm text-gray-500">
            {rewards.length} rewards available
          </div>
        </div>

        {rewards.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No rewards available</h3>
              <p className="mt-1 text-sm text-gray-500">Check back later for new rewards!</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                  {reward.image ? (
                    <img
                      src={reward.image}
                      alt={reward.name}
                      className="w-full h-32 object-contain p-4 group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="w-full h-32 bg-gray-100 flex items-center justify-center text-gray-400"
                    style={{ display: reward.image ? 'none' : 'flex' }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
                      {reward.name}
                    </h3>
                    {reward.brandName && (
                      <p className="text-xs text-gray-500 mt-1">{reward.brandName}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="text-workday-blue font-bold text-sm">
                      {getPointCost(reward.minValue, reward.maxValue)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatCurrency(reward.minValue, reward.currency)}
                      {reward.minValue !== reward.maxValue && ` - ${formatCurrency(reward.maxValue, reward.currency)}`}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleRedeemClick(reward)}
                    className="w-full mt-3 bg-workday-blue text-white text-sm py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
                  >
                    Redeem Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rewards;