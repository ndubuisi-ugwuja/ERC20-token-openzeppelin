const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenModule", (m) => {
    // Define a parameter for supply
    const initialSupply = m.getParameter("initialSupply", "1000000000000000000000000");
    // (default = 1000000 tokens, 18 decimals)

    // Pass parameter into contract constructor
    const token = m.contract("FaculaToken", [initialSupply]);

    return { token };
});
