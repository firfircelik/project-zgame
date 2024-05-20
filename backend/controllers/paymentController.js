exports.processPayment = async (req, res) => {
    try {
        // Simulate a successful payment
        res.status(200).json({ message: 'Payment processed successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
