import Image from "next/image";

export default function ImageComponent() {
  return (
    // flex property makes the elements inside the container grow and shrink
    // according to the size of the cotainer, setting each of then to 0
    // prevent this behavior
    <div className="w-1/4 h-full block grow-0 shrink-0">
      <Image
        alt=""
        width={200}
        height={117}
        layout="responsive"
        src="https://placehold.jp/200x117.png"
      ></Image>
    </div>
  );
}
