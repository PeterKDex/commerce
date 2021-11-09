import Image from 'next/image'

const Logo = ({ className = '', ...props }) => (
  <>
  <Image
    src={"https://assets-global.website-files.com/5dad7a19f43e6f31a9e92718/600124e0abab083119394333_omega-logo.png"}
    alt="Omega"
    width={32}
    height={32}
    layout={"fixed"} // intrinsic|fixed|responsive|fill allowed
    // ...
  />
</>
)

export default Logo
