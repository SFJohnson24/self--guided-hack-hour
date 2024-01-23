def encode(self, strs):
        res = ''
        for s in strs:
            encoded = str(s+"-encodeStr-")
            res += encoded
        return res
    
def decode(self, str):
    return str.split("-encodeStr-")