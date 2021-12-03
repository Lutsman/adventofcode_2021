const rawData = '011110011110\n' +
    '101101001111\n' +
    '000000010101\n' +
    '100111001010\n' +
    '110000011010\n' +
    '011101010101\n' +
    '011110001100\n' +
    '010111111001\n' +
    '111011100101\n' +
    '011110000110\n' +
    '010100001111\n' +
    '000001001100\n' +
    '110001001000\n' +
    '001000100101\n' +
    '010100011110\n' +
    '010111011110\n' +
    '110101001111\n' +
    '011010111011\n' +
    '000011010101\n' +
    '100111011100\n' +
    '010010100011\n' +
    '010010011001\n' +
    '000111010011\n' +
    '111001000111\n' +
    '100101111111\n' +
    '011001101110\n' +
    '110010101100\n' +
    '001000010001\n' +
    '110101100011\n' +
    '101110001011\n' +
    '010100000110\n' +
    '001110011110\n' +
    '011101100110\n' +
    '001111101101\n' +
    '000101101000\n' +
    '100110000111\n' +
    '000001010100\n' +
    '111100010110\n' +
    '000100100100\n' +
    '001000110001\n' +
    '101000001011\n' +
    '101000100110\n' +
    '110000101010\n' +
    '010111110000\n' +
    '111110010110\n' +
    '011011111111\n' +
    '111010100000\n' +
    '100001000111\n' +
    '011000001010\n' +
    '011000010001\n' +
    '101101100001\n' +
    '011001101011\n' +
    '111001001010\n' +
    '000010110101\n' +
    '101110100010\n' +
    '001111111101\n' +
    '011110001001\n' +
    '000111100011\n' +
    '010101001001\n' +
    '111110111111\n' +
    '111000111010\n' +
    '001001111100\n' +
    '000011000001\n' +
    '011100010110\n' +
    '110010000111\n' +
    '000010010101\n' +
    '110000001110\n' +
    '010011111011\n' +
    '001010100100\n' +
    '111001010101\n' +
    '001101000011\n' +
    '110100110011\n' +
    '110010100101\n' +
    '001000001011\n' +
    '111110011000\n' +
    '110111011011\n' +
    '110110101001\n' +
    '010010100100\n' +
    '111100001100\n' +
    '100100001100\n' +
    '110001111010\n' +
    '111011001011\n' +
    '010000010001\n' +
    '110010100000\n' +
    '010100011100\n' +
    '000110001001\n' +
    '010011000001\n' +
    '111011010001\n' +
    '010011111101\n' +
    '111101110100\n' +
    '110110101100\n' +
    '010100111110\n' +
    '100011001101\n' +
    '000010000010\n' +
    '011111100001\n' +
    '100000101100\n' +
    '100001110011\n' +
    '100101100100\n' +
    '000100001001\n' +
    '101000000011\n' +
    '110111101100\n' +
    '100100101001\n' +
    '001001101001\n' +
    '000001010000\n' +
    '001001111110\n' +
    '111011111010\n' +
    '001000011110\n' +
    '110000100111\n' +
    '010010010101\n' +
    '011010001011\n' +
    '100010010101\n' +
    '010110101010\n' +
    '011111001011\n' +
    '110010011100\n' +
    '111110101010\n' +
    '000001111010\n' +
    '111101110101\n' +
    '101010110111\n' +
    '100010101111\n' +
    '000110101110\n' +
    '000000010000\n' +
    '000010100110\n' +
    '111110010001\n' +
    '000100110000\n' +
    '110010011011\n' +
    '101001000010\n' +
    '010110000101\n' +
    '100011100100\n' +
    '110000110100\n' +
    '110011000001\n' +
    '101110001000\n' +
    '010100011111\n' +
    '111000100111\n' +
    '110001100010\n' +
    '100001101000\n' +
    '101001000111\n' +
    '111110100000\n' +
    '000011000010\n' +
    '110000000001\n' +
    '111010000111\n' +
    '100100111011\n' +
    '101101110001\n' +
    '111100110100\n' +
    '100110010000\n' +
    '001001001110\n' +
    '100010001001\n' +
    '101000110100\n' +
    '011100001111\n' +
    '001110100110\n' +
    '110100001100\n' +
    '101101001011\n' +
    '000011111110\n' +
    '101101010100\n' +
    '000110110001\n' +
    '011100011001\n' +
    '111000111111\n' +
    '011010101100\n' +
    '111000100101\n' +
    '100111011110\n' +
    '011010100110\n' +
    '110000101111\n' +
    '110010000001\n' +
    '100001110101\n' +
    '110101011111\n' +
    '111111000011\n' +
    '101010010010\n' +
    '000111111111\n' +
    '000001001111\n' +
    '101101010010\n' +
    '111111001000\n' +
    '001001110000\n' +
    '110010011110\n' +
    '110011001111\n' +
    '100111101011\n' +
    '011111000111\n' +
    '110010111100\n' +
    '010110000000\n' +
    '110001100011\n' +
    '111000100001\n' +
    '011000101000\n' +
    '100110001100\n' +
    '001101011011\n' +
    '011001111110\n' +
    '011101000110\n' +
    '110110111001\n' +
    '110101001010\n' +
    '111000111011\n' +
    '100111010001\n' +
    '100110000011\n' +
    '010001000100\n' +
    '001001001000\n' +
    '010010001010\n' +
    '010101101101\n' +
    '001110001001\n' +
    '101110011111\n' +
    '010111001111\n' +
    '110111001110\n' +
    '100000101011\n' +
    '010000111111\n' +
    '101000101011\n' +
    '101011010111\n' +
    '000101110001\n' +
    '100100010010\n' +
    '100111011101\n' +
    '111100000100\n' +
    '100110000001\n' +
    '000001000101\n' +
    '101100001111\n' +
    '100000101001\n' +
    '010101010110\n' +
    '000110010111\n' +
    '011101001100\n' +
    '000111111011\n' +
    '000001100101\n' +
    '100001011011\n' +
    '111000101110\n' +
    '111101100111\n' +
    '011010010100\n' +
    '101001001010\n' +
    '110100110001\n' +
    '111101011101\n' +
    '000011101110\n' +
    '011000100100\n' +
    '101110000111\n' +
    '011101110110\n' +
    '111001010001\n' +
    '011110000100\n' +
    '011110001101\n' +
    '100111100001\n' +
    '010011100001\n' +
    '001001101101\n' +
    '001111111010\n' +
    '010101000101\n' +
    '011100000110\n' +
    '100010001101\n' +
    '011011101011\n' +
    '110111001010\n' +
    '101000010010\n' +
    '111111100011\n' +
    '000101111011\n' +
    '001101010011\n' +
    '100101000001\n' +
    '101101100011\n' +
    '101110010011\n' +
    '011001100000\n' +
    '110001111111\n' +
    '011100101100\n' +
    '010010001110\n' +
    '111110101101\n' +
    '010110001000\n' +
    '000011000110\n' +
    '101010011011\n' +
    '000100111011\n' +
    '001000111101\n' +
    '010011111111\n' +
    '011101100111\n' +
    '111111011111\n' +
    '001100000000\n' +
    '101100001110\n' +
    '101100001000\n' +
    '100001011111\n' +
    '100001000101\n' +
    '000101011001\n' +
    '010100111100\n' +
    '110000111011\n' +
    '010000111100\n' +
    '011100110000\n' +
    '101111110010\n' +
    '100011110101\n' +
    '100100110101\n' +
    '100001100000\n' +
    '101000100101\n' +
    '111000001100\n' +
    '010000001011\n' +
    '110101010111\n' +
    '011011001000\n' +
    '100111000101\n' +
    '011000000100\n' +
    '110110011000\n' +
    '101101101101\n' +
    '100101110010\n' +
    '001100001010\n' +
    '010111000011\n' +
    '111111100001\n' +
    '100010111011\n' +
    '110011001001\n' +
    '000011011101\n' +
    '001100101101\n' +
    '010110011001\n' +
    '111100110010\n' +
    '011111001110\n' +
    '100110001111\n' +
    '000111101111\n' +
    '011000110001\n' +
    '001010001010\n' +
    '000111010100\n' +
    '010011110101\n' +
    '011111000010\n' +
    '000101000010\n' +
    '111101011010\n' +
    '110011111100\n' +
    '100000001000\n' +
    '100001000110\n' +
    '101010100001\n' +
    '000101000101\n' +
    '100100011111\n' +
    '110000101110\n' +
    '000110000101\n' +
    '001001011111\n' +
    '100010011100\n' +
    '000001110001\n' +
    '110000010100\n' +
    '011111010100\n' +
    '001000001111\n' +
    '000111000001\n' +
    '110010001000\n' +
    '001001111101\n' +
    '111000001001\n' +
    '001011000001\n' +
    '111110010100\n' +
    '110010001100\n' +
    '010110110000\n' +
    '011100100010\n' +
    '011000101011\n' +
    '001001000001\n' +
    '011001001110\n' +
    '111000010100\n' +
    '000110000110\n' +
    '011011000100\n' +
    '011000010111\n' +
    '110001011000\n' +
    '010111011000\n' +
    '000101110100\n' +
    '000000011111\n' +
    '001100111100\n' +
    '000010100101\n' +
    '000111110000\n' +
    '000110000001\n' +
    '000100101001\n' +
    '101111110100\n' +
    '010010000001\n' +
    '001100010001\n' +
    '101111001101\n' +
    '111011111101\n' +
    '000011110011\n' +
    '111001011100\n' +
    '010110110110\n' +
    '000000001101\n' +
    '010010000000\n' +
    '000001010011\n' +
    '101000010000\n' +
    '101000001110\n' +
    '010001000111\n' +
    '111010011011\n' +
    '101001111110\n' +
    '000110101100\n' +
    '100110101001\n' +
    '100111111111\n' +
    '101001101001\n' +
    '110010010011\n' +
    '011001011111\n' +
    '111111110110\n' +
    '101110010110\n' +
    '100100001101\n' +
    '010001111110\n' +
    '111111101000\n' +
    '100010100001\n' +
    '011110010100\n' +
    '101000110011\n' +
    '010110110011\n' +
    '011111001000\n' +
    '100010100101\n' +
    '110010010110\n' +
    '111011001000\n' +
    '101110001101\n' +
    '000010110011\n' +
    '001110100100\n' +
    '100000011101\n' +
    '011001100001\n' +
    '011001101010\n' +
    '001100011101\n' +
    '000111101100\n' +
    '001010001001\n' +
    '111001101110\n' +
    '110110001111\n' +
    '001111001010\n' +
    '001001000011\n' +
    '001000010000\n' +
    '000001111110\n' +
    '000101101111\n' +
    '001001000110\n' +
    '100001101110\n' +
    '101111011100\n' +
    '111110010010\n' +
    '010001100011\n' +
    '101000100111\n' +
    '001101000111\n' +
    '111011110011\n' +
    '000011000101\n' +
    '111101001110\n' +
    '110111111111\n' +
    '011100010100\n' +
    '110011110001\n' +
    '001011011001\n' +
    '000011010111\n' +
    '011000001110\n' +
    '000101010111\n' +
    '110101110001\n' +
    '001100001111\n' +
    '110111010111\n' +
    '110010010101\n' +
    '100111100111\n' +
    '101000000111\n' +
    '101111000100\n' +
    '100011100010\n' +
    '000100100101\n' +
    '111011110110\n' +
    '001111100110\n' +
    '011011000010\n' +
    '100010010100\n' +
    '010111110010\n' +
    '100010110011\n' +
    '111111111000\n' +
    '011010101111\n' +
    '101110111011\n' +
    '101110101010\n' +
    '001011001000\n' +
    '110110001011\n' +
    '110100101111\n' +
    '001011001011\n' +
    '110011010000\n' +
    '000000100000\n' +
    '100000110000\n' +
    '101110011011\n' +
    '100101101111\n' +
    '010110100010\n' +
    '000010100011\n' +
    '000110110000\n' +
    '111101000001\n' +
    '011001010011\n' +
    '000000001110\n' +
    '000100110101\n' +
    '111111111110\n' +
    '001010101001\n' +
    '001101100111\n' +
    '010100000101\n' +
    '000111001001\n' +
    '101100101110\n' +
    '011011110111\n' +
    '011010000011\n' +
    '000100101011\n' +
    '100001100110\n' +
    '000111011101\n' +
    '000100011100\n' +
    '000101100101\n' +
    '011111111110\n' +
    '111010111011\n' +
    '100000100101\n' +
    '011001011110\n' +
    '010101100010\n' +
    '010101111101\n' +
    '100001000001\n' +
    '001000100001\n' +
    '010010111110\n' +
    '100011001011\n' +
    '011011000111\n' +
    '110011010101\n' +
    '111101100100\n' +
    '001110001010\n' +
    '110011111101\n' +
    '111011011101\n' +
    '001101000001\n' +
    '101011011011\n' +
    '100000111010\n' +
    '010101110101\n' +
    '000101011100\n' +
    '011000011001\n' +
    '111001010011\n' +
    '100100010110\n' +
    '111101010001\n' +
    '110110011011\n' +
    '011110110100\n' +
    '101000110101\n' +
    '101110111101\n' +
    '011011011110\n' +
    '000100110110\n' +
    '100011011111\n' +
    '111010101001\n' +
    '011111011000\n' +
    '101000101110\n' +
    '110010111001\n' +
    '111010000010\n' +
    '110011011001\n' +
    '110110010100\n' +
    '111010011010\n' +
    '000010110001\n' +
    '011101100010\n' +
    '110010110111\n' +
    '010101001111\n' +
    '011011001101\n' +
    '101111000110\n' +
    '010111010010\n' +
    '101111011011\n' +
    '100111101100\n' +
    '001000001101\n' +
    '010110100000\n' +
    '001010100110\n' +
    '111111000111\n' +
    '100101000100\n' +
    '100101001100\n' +
    '110111010110\n' +
    '101000101000\n' +
    '100001001111\n' +
    '110011110010\n' +
    '111111101111\n' +
    '110001111000\n' +
    '010001110110\n' +
    '101100000010\n' +
    '000110000111\n' +
    '001011100101\n' +
    '101010100101\n' +
    '110110001001\n' +
    '000011011111\n' +
    '110110101110\n' +
    '101100110010\n' +
    '101110101110\n' +
    '101010110101\n' +
    '000111000011\n' +
    '101000011111\n' +
    '001100000111\n' +
    '101001111111\n' +
    '100100011101\n' +
    '111100011011\n' +
    '000010111010\n' +
    '111010101010\n' +
    '101001010010\n' +
    '101100010011\n' +
    '010000110110\n' +
    '011110110011\n' +
    '001101110111\n' +
    '110111110110\n' +
    '001011000100\n' +
    '101111100010\n' +
    '011010011100\n' +
    '110100001010\n' +
    '100100110111\n' +
    '000011010011\n' +
    '000110111010\n' +
    '001100100000\n' +
    '100111011011\n' +
    '001101101011\n' +
    '101011101111\n' +
    '001101100100\n' +
    '111010010111\n' +
    '100111111100\n' +
    '101101000100\n' +
    '000011111100\n' +
    '011111001101\n' +
    '110101001101\n' +
    '011100100110\n' +
    '101011000000\n' +
    '100001010011\n' +
    '011110111110\n' +
    '011011100110\n' +
    '110001011010\n' +
    '111111110101\n' +
    '001111111000\n' +
    '100010011011\n' +
    '100001101100\n' +
    '110011010100\n' +
    '100011000001\n' +
    '011110111001\n' +
    '010111110110\n' +
    '100110001010\n' +
    '100000000011\n' +
    '001001101111\n' +
    '101111011010\n' +
    '010000110100\n' +
    '101001011110\n' +
    '100100011000\n' +
    '101101000111\n' +
    '011101001001\n' +
    '010101110010\n' +
    '000110000000\n' +
    '000100111000\n' +
    '010110111010\n' +
    '110000011111\n' +
    '011001011100\n' +
    '010100110110\n' +
    '011111110011\n' +
    '111011011010\n' +
    '001000101011\n' +
    '000010110100\n' +
    '011100101000\n' +
    '111111100110\n' +
    '011001110100\n' +
    '000100011000\n' +
    '010101010111\n' +
    '001011101000\n' +
    '001000011100\n' +
    '110101101100\n' +
    '010001000010\n' +
    '001010010000\n' +
    '111000110001\n' +
    '101111111111\n' +
    '011101011110\n' +
    '001001111010\n' +
    '001000100110\n' +
    '000011011001\n' +
    '100101100001\n' +
    '110111000000\n' +
    '100111011111\n' +
    '111000110000\n' +
    '110010111111\n' +
    '000010010011\n' +
    '100001100111\n' +
    '010110100100\n' +
    '001101001010\n' +
    '101001100110\n' +
    '010001110101\n' +
    '001011000010\n' +
    '010111110101\n' +
    '000001001110\n' +
    '010010100110\n' +
    '111011001110\n' +
    '101011111001\n' +
    '000100000000\n' +
    '111101001100\n' +
    '100111011010\n' +
    '000010010001\n' +
    '100000010000\n' +
    '101101000010\n' +
    '110100010100\n' +
    '111011111000\n' +
    '101001100100\n' +
    '001110101011\n' +
    '000111001010\n' +
    '111110000011\n' +
    '001110100101\n' +
    '101010000101\n' +
    '010101010011\n' +
    '110000111100\n' +
    '101011001010\n' +
    '010001011011\n' +
    '010000011010\n' +
    '000010101011\n' +
    '100110110101\n' +
    '100111011001\n' +
    '100111010111\n' +
    '000101100000\n' +
    '101110000001\n' +
    '100100001000\n' +
    '010111000010\n' +
    '000101001010\n' +
    '001110010010\n' +
    '111011000111\n' +
    '001110110010\n' +
    '111010000001\n' +
    '011000100101\n' +
    '000111100101\n' +
    '100000100111\n' +
    '100110011011\n' +
    '001011100001\n' +
    '101010100111\n' +
    '011001111000\n' +
    '000011011010\n' +
    '001011101100\n' +
    '010011011001\n' +
    '000111111100\n' +
    '010001011110\n' +
    '111111011010\n' +
    '111010010101\n' +
    '110000010011\n' +
    '001001101010\n' +
    '000101011011\n' +
    '100111111110\n' +
    '110010101001\n' +
    '111000011000\n' +
    '011100101110\n' +
    '011100010001\n' +
    '001101110010\n' +
    '101000111111\n' +
    '101011011001\n' +
    '110111000110\n' +
    '001000010100\n' +
    '000111000100\n' +
    '010000101110\n' +
    '001100100001\n' +
    '111100000011\n' +
    '111011101010\n' +
    '000001111000\n' +
    '100100010000\n' +
    '110110000110\n' +
    '000010111100\n' +
    '110110110111\n' +
    '010000011011\n' +
    '101110000100\n' +
    '011100100100\n' +
    '010111001011\n' +
    '001011010000\n' +
    '000111010001\n' +
    '110010111000\n' +
    '001011011110\n' +
    '000001100111\n' +
    '010000101111\n' +
    '110001100100\n' +
    '111000001101\n' +
    '000110011001\n' +
    '010000010110\n' +
    '101010001110\n' +
    '111000111000\n' +
    '011111011100\n' +
    '111001110110\n' +
    '111100010001\n' +
    '110101111001\n' +
    '001001010011\n' +
    '010001111001\n' +
    '001101101110\n' +
    '010011000010\n' +
    '000100011011\n' +
    '000001101000\n' +
    '001110100001\n' +
    '100011010011\n' +
    '100000011100\n' +
    '011001010111\n' +
    '110011011010\n' +
    '100110001011\n' +
    '011001110111\n' +
    '001010001100\n' +
    '000111010111\n' +
    '110111111101\n' +
    '111001101010\n' +
    '001110001000\n' +
    '011100001010\n' +
    '010011101010\n' +
    '111011010011\n' +
    '000011001010\n' +
    '100101000110\n' +
    '100101010111\n' +
    '110010100010\n' +
    '010100101111\n' +
    '111011011100\n' +
    '100011100101\n' +
    '101111111101\n' +
    '001001110011\n' +
    '110111101001\n' +
    '100100010101\n' +
    '010101100001\n' +
    '100011000011\n' +
    '001010010111\n' +
    '011001001001\n' +
    '110001101001\n' +
    '010011100010\n' +
    '111000001111\n' +
    '010101111111\n' +
    '001001001011\n' +
    '000111110111\n' +
    '100110111101\n' +
    '011011110000\n' +
    '001001011110\n' +
    '011010101101\n' +
    '111011101011\n' +
    '010001100111\n' +
    '110100001111\n' +
    '100010110111\n' +
    '000000010100\n' +
    '100000010001\n' +
    '010011010101\n' +
    '010011100110\n' +
    '100011111011\n' +
    '110110100001\n' +
    '110000100110\n' +
    '110101100000\n' +
    '110001101011\n' +
    '110110100110\n' +
    '101111101110\n' +
    '011010101011\n' +
    '101001010101\n' +
    '110110111101\n' +
    '100111100010\n' +
    '101100100010\n' +
    '101011101101\n' +
    '010011010011\n' +
    '001111011100\n' +
    '100101010100\n' +
    '101010101010\n' +
    '010000011101\n' +
    '011100000010\n' +
    '100111101000\n' +
    '111111010101\n' +
    '011010101000\n' +
    '001010110010\n' +
    '111110010011\n' +
    '110111011010\n' +
    '010010111111\n' +
    '111001100111\n' +
    '010101111000\n' +
    '000111110011\n' +
    '111101000110\n' +
    '001011000000\n' +
    '110100100110\n' +
    '101001110010\n' +
    '101111011001\n' +
    '111110000001\n' +
    '011101110010\n' +
    '011000010110\n' +
    '101011010010\n' +
    '100110011101\n' +
    '000010011101\n' +
    '001111110100\n' +
    '110011001100\n' +
    '111110111100\n' +
    '011001011000\n' +
    '001110000011\n' +
    '110001001101\n' +
    '111110111011\n' +
    '110000000000\n' +
    '010000110001\n' +
    '000100110001\n' +
    '001000101101\n' +
    '001100110111\n' +
    '101011001111\n' +
    '110011110011\n' +
    '010011100101\n' +
    '001001000000\n' +
    '011110100000\n' +
    '001010110111\n' +
    '110101111101\n' +
    '001111000000\n' +
    '100011011001\n' +
    '100000001001\n' +
    '000010101010\n' +
    '110000100000\n' +
    '111111101001\n' +
    '111010101100\n' +
    '101100110111\n' +
    '110100011000\n' +
    '010011000111\n' +
    '010010001000\n' +
    '001011001111\n' +
    '001001001100\n' +
    '100010110110\n' +
    '111100111011\n' +
    '111100101100\n' +
    '000111111101\n' +
    '101110000011\n' +
    '100001011101\n' +
    '111101110011\n' +
    '100100000011\n' +
    '111110011001\n' +
    '100010111101\n' +
    '110001001010\n' +
    '111111100100\n' +
    '010000110101\n' +
    '001100001101\n' +
    '001001110111\n' +
    '110110101010\n' +
    '011110010010\n' +
    '101011010000\n' +
    '101101110010\n' +
    '010010110000\n' +
    '011110100111\n' +
    '010111000100\n' +
    '010100000010\n' +
    '000011110100\n' +
    '111001011101\n' +
    '010111100101\n' +
    '110010101101\n' +
    '011100010010\n' +
    '001110111100\n' +
    '011111110110\n' +
    '001110100010\n' +
    '000001100001\n' +
    '011011110010\n' +
    '000010111101\n' +
    '001011111110\n' +
    '111110111010\n' +
    '001010101101\n' +
    '100011110010\n' +
    '001111110010\n' +
    '011001110010\n' +
    '100110101100\n' +
    '010111010011\n' +
    '001000010011\n' +
    '111110110010\n' +
    '011000000110\n' +
    '011111111100\n' +
    '000111110110\n' +
    '110001110100\n' +
    '101110010101\n' +
    '010000111101\n' +
    '011011101110\n' +
    '011010100111\n' +
    '001010000010\n' +
    '100001100011\n' +
    '110001000000\n' +
    '101111100111\n' +
    '101111110011\n' +
    '001101110011\n' +
    '110001110101\n' +
    '100101010010\n' +
    '010101011110\n' +
    '000011111000\n' +
    '000100001000\n' +
    '101001110011\n' +
    '011100110001\n' +
    '000000011100\n' +
    '111110010111\n' +
    '101011101100\n' +
    '110011101100\n' +
    '110101011000\n' +
    '010111001000\n' +
    '111100001010\n' +
    '001000011111\n' +
    '010100111011\n' +
    '101010101011\n' +
    '001110001110\n' +
    '100011000110\n' +
    '000101101011\n' +
    '110011010111\n' +
    '111001011110\n' +
    '111010100110\n' +
    '010001110001\n' +
    '011010101110\n' +
    '101011110000\n' +
    '001101010010\n' +
    '001010000011\n' +
    '011001000111\n' +
    '010001000110\n' +
    '010110011111\n' +
    '001111011000\n' +
    '000010010111\n' +
    '100011110111\n' +
    '111100111100\n' +
    '010101010001\n' +
    '100011101111\n' +
    '011101011001\n' +
    '001011001100\n' +
    '001111000101\n' +
    '110111011000\n' +
    '011001001010\n' +
    '010000000100\n' +
    '100110111010\n' +
    '000000111110\n' +
    '011100100011\n' +
    '100100111110\n' +
    '000010011010\n' +
    '111000000100\n' +
    '001110001111\n' +
    '011000101010\n' +
    '011100110010\n' +
    '110101000111\n' +
    '110110111111\n' +
    '101110110010\n' +
    '000110100000\n' +
    '110100001101\n' +
    '000111101110\n' +
    '111000111001\n' +
    '000111111010\n' +
    '010110111011\n' +
    '000101110111\n' +
    '111000011011\n' +
    '010110001010\n' +
    '001011111011\n' +
    '100100100011\n' +
    '011110110010\n' +
    '000111110101\n' +
    '110110011101\n' +
    '000011000011\n' +
    '110011001010\n' +
    '000100101100\n' +
    '101100100011\n' +
    '010111000001\n' +
    '110101100001\n' +
    '011110111010\n' +
    '111100101000\n' +
    '010000100010\n' +
    '110011000111\n' +
    '010011011100\n' +
    '100110101011\n' +
    '000100001011\n' +
    '101111000010\n' +
    '010000010000\n' +
    '111110000100\n' +
    '111100011110\n' +
    '010100111001\n' +
    '100000011111\n' +
    '010111110100\n' +
    '100100110011\n' +
    '111101111001\n' +
    '100010011000\n' +
    '111110101111\n' +
    '010111001010\n' +
    '110000101000\n' +
    '001111111111\n' +
    '000111100110\n' +
    '000011101100\n' +
    '011010001000\n' +
    '001011010011\n' +
    '110011111011\n';

const parsedData = rawData.split('\n').slice(0, -1);

(() => {
    let gammaCalcArray = [];
    let epsilonCalcArray = [];
    let gammaResult = [];
    let epsilonResult = [];

    const fillRate = (rate, value, index) => {
        rate[index] = rate[index] ? {
            ...rate[index],
            [value]: rate[index][value] ? rate[index][value] + 1 : 1,
        } : {
            [value]: 1,
        };
    }

    parsedData.forEach((binaryInputStr) => {
        binaryInputStr.split('').forEach((itemStr, i) => {
            fillRate(gammaCalcArray, itemStr, i);
            fillRate(epsilonCalcArray, itemStr, i);
        });
    });

    for (let i = 0; i < gammaCalcArray.length; i++) {
        gammaResult[i] = gammaCalcArray[i]['0'] > gammaCalcArray[i]['1'] ? 0 : 1;
        epsilonResult[i] = epsilonCalcArray[i]['0'] < epsilonCalcArray[i]['1'] ? 0 : 1;
    }

    const calcNumber = (arr, name) => {
        const binary = arr.join('');
        const decimal = parseInt(binary, 2);

        console.log(`${name}Binary`, binary);
        console.log(`${name}Decimal`, decimal);

        return decimal;
    };

    const gammaDecimal = calcNumber(gammaResult, 'gamma');
    const epsilonDecimal = calcNumber(epsilonResult, 'epsilon');

    console.log('power', gammaDecimal * epsilonDecimal);
})();