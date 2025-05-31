import SignalList from './signal-list';
import DecoratedTitle from '@/components/ui/decorated-title/decorated-title';

const SignalListContainer = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto px-2">
      <div className="circle-grey top-0 right-[-50px] circle-right md:hidden"></div>
      <DecoratedTitle className="max-w-[361px] md:max-w-[590px] mx-auto md:mx-0 mb-[30px] md:mb-[54px]">
        3 сигнали від волосся, що йому потрібне лікування
      </DecoratedTitle>
      <SignalList />
      <div className="circle-grey bottom-[-30%] left-[-700px]"></div>
    </section>
  );
};

export default SignalListContainer;
