import Input from 'src/components/atoms/Input';

export default function PopupSignUp() {
  return (
    <>
      <div className="flex justify-center px-10 mt-5">
        <div className="">
          <Input placeholder="Email" touched={true} />
          <Input placeholder="Password" />
        </div>
      </div>
    </>
  );
}
