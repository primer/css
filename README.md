```python
import re

# First Script
text = """
Transaction Description:

Sender: AfricaCryptoChainx Platform
Recipient: Members

Transaction Details:

Subject: Unlocking Financial Inclusion with AfricaCryptoChainx

Content:

Dear Members,

We are thrilled to introduce AfricaCryptoChainx, a groundbreaking platform revolutionizing financial services through cryptocurrency trading, asset staking, immersive gaming experiences, and global economic participation.

---

AfricaCryptoChainx Wallet Features:

🔐 Robust Security Infrastructure:  
Experience unmatched security with our advanced protocols, safeguarding your assets and personal data in the volatile cryptocurrency landscape.

---

Security Pledge:

🔒 Preserving Your Assets:  
Security is our priority. We employ top-tier measures to protect your funds and sensitive data, ensuring trust and reliability within our platform.

---

Enhanced User Experience:

🌐 Intuitive Design:  
Our user-centric interface caters to all traders, offering seamless navigation and interaction.

💡 Educational Resources:  
Access comprehensive materials and insights to confidently navigate the cryptocurrency landscape.

🎮 Immersive Gaming Integration:  
Enjoy captivating gaming experiences while potentially earning rewards with your assets.

---

Community Collaboration:

🤝 Local Partnerships:  
Forge alliances with local businesses to integrate AfricaCryptoChainx into the regional financial ecosystem.

📢 Community Engagement:  
Participate in dialogue and collaboration with local media and industry stakeholders.

---

Optimized Transaction Efficiency with Solana Integration:

💸 Seamless Transactions:  
Leverage Solana's blockchain for swift and cost-effective transactions.

---

Join Us:

[Join our Discord Channel](https://discord.com/channels/904119310702772254/1183743430799659069)

1. Explore Financial Inclusion:  
Visit [Africacryptochainx.com](https://Africacryptochainx.com) to unlock opportunities across Africa.

2. Secure Wallet Registration:  
Register your AfricaCryptoChainx wallet securely for a seamless experience.

3. Trade, Stake, and Game:  
Engage in trading, asset staking, and crypto gaming for a diverse experience.

4. Community-Driven Growth:  
Join us in building a vibrant community that drives growth and inclusivity.

---

Thank you for being a part of this revolutionary journey with AfricaCryptoChainx! 🚀
"""

# Second Script
t = text
s, r, c, d = map(lambda x: re.search(x, t).group(1), ["Sender: (.+)", "Recipient: (.+)", "Subject: (.+)", "Content:(.+?)---"])
f = re.findall(r"🔐 (.+?):\s+(.+)", t)
co = re.findall(r"🤝 (.+?):\s+(.+)", t)
a = re.findall(r"\d+\. (.+?):\s+(.+)", t)

# Printing extracted information
print("Sender:", s)
print("Recipient:", r)
print("Subject:", c)
print("Content:", d)
print("Features:", *[f"{x[0]}: {x[1]}" for x in f])
print("Collaboration:", *[f"{x[0]}: {x[1]}" for x in co])
print("Actions:", *[f"{x[0]}: {x[1]}" for x in a])
```

```python
import re

# First Script
text = """
Transaction Description:

Sender: AfricaCryptoChainx Platform
Recipient: Members

Transaction Details:

Subject: Unlocking Financial Inclusion with AfricaCryptoChainx

Content:

Dear Members,

We are thrilled to introduce AfricaCryptoChainx, a groundbreaking platform revolutionizing financial services through cryptocurrency trading, asset staking, immersive gaming experiences, and global economic participation.

---

AfricaCryptoChainx Wallet Features:

🔐 Robust Security Infrastructure:  
Experience unmatched security with our advanced protocols, safeguarding your assets and personal data in the volatile cryptocurrency landscape.

---

Security Pledge:

🔒 Preserving Your Assets:  
Security is our priority. We employ top-tier measures to protect your funds and sensitive data, ensuring trust and reliability within our platform.

---

Enhanced User Experience:

🌐 Intuitive Design:  
Our user-centric interface caters to all traders, offering seamless navigation and interaction.

💡 Educational Resources:  
Access comprehensive materials and insights to confidently navigate the cryptocurrency landscape.

🎮 Immersive Gaming Integration:  
Enjoy captivating gaming experiences while potentially earning rewards with your assets.

---

Community Collaboration:

🤝 Local Partnerships:  
Forge alliances with local businesses to integrate AfricaCryptoChainx into the regional financial ecosystem.

📢 Community Engagement:  
Participate in dialogue and collaboration with local media and industry stakeholders.

---

Optimized Transaction Efficiency with Solana Integration:

💸 Seamless Transactions:  
Leverage Solana's blockchain for swift and cost-effective transactions.

---

Join Us:

[Join our Discord Channel](https://discord.com/channels/904119310702772254/1183743430799659069)

1. Explore Financial Inclusion:  
Visit [Africacryptochainx.com](https://Africacryptochainx.com) to unlock opportunities across Africa.

2. Secure Wallet Registration:  
Register your AfricaCryptoChainx wallet securely for a seamless experience.

3. Trade, Stake, and Game:  
Engage in trading, asset staking, and crypto gaming for a diverse experience.

4. Community-Driven Growth:  
Join us in building a vibrant community that drives growth and inclusivity.

---

Thank you for being a part of this revolutionary journey with AfricaCryptoChainx! 🚀
"""

# Second Script
t = text
s, r, c, d = map(lambda x: re.search(x, t).group(1), ["Sender: (.+)", "Recipient: (.+)", "Subject: (.+)", "Content:(.+?)---"])
f = re.findall(r"🔐 (.+?):\s+(.+)", t)
co = re.findall(r"🤝 (.+?):\s+(.+)", t)
a = re.findall(r"\d+\. (.+?):\s+(.+)", t)

# Printing extracted information
print("Sender:", s)
print("Recipient:", r)
print("Subject:", c)
print("Content:", d)
print("Features:", *[f"{x[0]}: {x[1]}" for x in f])
print("Collaboration:", *[f"{x[0]}: {x[1]}" for x in co])
print("Actions:", *[f"{x[0]}: {x[1]}" for x in a])
```