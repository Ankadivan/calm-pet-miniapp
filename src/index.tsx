import './styles/tailwind.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Flame,
  MessageSquare,
  MoreVertical,
  Settings,
  Share,
  X,
} from "lucide-react";
import React from "react";

export default function MainScreen(): JSX.Element {
  return (
    <div className="bg-[#efeff4] flex flex-row justify-center w-full">
      <div className="bg-colors-native-secondary-bg-color overflow-hidden border border-solid border-[#0000000d] w-[393px] h-[777px] relative">
        {/* Status Bar */}
        <header className="flex flex-col w-[393px] items-start absolute top-0 left-0 border-b-[0.5px] border-colors-custom-divider">
          <div className="relative self-stretch w-full h-[52px]">
            <div className="absolute h-5 top-[21px] left-7 font-medium text-[#000000f2] text-sm tracking-[0.14px] leading-5 whitespace-nowrap">
              9:30
            </div>

            <div className="absolute w-[46px] h-[17px] top-[25px] left-[319px]">
              {/* Status icons (simplified) */}
              <div className="flex items-center justify-end space-x-1">
                <div className="h-[17px] w-[17px]">
                  {/* Signal icon placeholder */}
                  <img src="" alt="Signal" />
                </div>
                <div className="h-[15px] w-2">
                  {/* Battery icon placeholder */}
                  <img src="" alt="Battery" />
                </div>
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="flex h-14 items-center justify-between px-4 py-[17px] relative self-stretch w-full border-b-[0.5px] border-colors-custom-divider">
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <X className="w-5 h-5" />
            </Button>
            <div className="relative flex-1 text-center font-roboto-headline-semibold font-semibold text-[#000000f2] text-[19px] tracking-[0.15px] leading-[28px]">
              Помошник тревожник
            </div>
            <Button variant="ghost" size="icon" className="h-auto p-0">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </header>

        <main className="absolute w-[395px] h-[540px] top-[108px] -left-0.5">
          {/* User Profile Section */}
          <div className="flex w-[393px] items-center justify-between px-[18px] py-6 absolute top-0 left-px">
            <div className="flex items-center gap-2.5">
              <Avatar className="w-[42px] h-[42px]">
                <AvatarImage src="" alt="User avatar" />
                <AvatarFallback>АН</AvatarFallback>
              </Avatar>
              <div className="font-semibold text-[#353535] text-xl tracking-[0.25px] leading-normal">
                Здравствуйте, Анна
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full p-2.5 border-[#00000015]"
              >
                <Share className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="h-auto p-0">
                <Settings className="w-11 h-11" />
              </Button>
            </div>
          </div>

          {/* Streak Card */}
          <div className="flex flex-col w-[393px] items-center justify-center gap-2.5 px-[18px] py-2 absolute top-[98px] left-0.5">
            <Card className="w-full border border-solid border-[#00000026] rounded-[10px]">
              <CardContent className="flex items-end justify-center gap-1.5 px-[108px] py-3">
                <span className="font-semibold text-colors-native-link-color text-base">
                  1
                </span>
                <span className="font-semibold text-black text-base">
                  day strike!
                </span>
                <Flame className="w-[22px] h-[23px] text-orange-500" />
              </CardContent>
            </Card>
          </div>

          {/* Pet Section */}
          <div className="absolute w-[393px] h-[287px] top-[163px] left-0">
            <div className="flex flex-col w-[393px] items-start gap-2 px-[18px] py-3 absolute top-0 left-0">
              <h2 className="self-stretch font-semibold text-[#353535] text-2xl tracking-[0.25px] leading-normal">
                Это ваш питомец Пушок
              </h2>
              <p className="self-stretch font-normal text-[#00000099] text-sm tracking-[0.25px] leading-normal">
                Что бы прокачивать своего питомца регулярно снижайте свой
                уровень тревоги с помощью наших техник.
              </p>
            </div>

            {/* Pet Avatar */}
            <div className="absolute w-[142px] h-[197px] top-[90px] left-2">
              <img
                className="w-full h-full object-cover"
                alt="Avatar character"
                src=""
              />
            </div>

            {/* Pet Stats */}
            <div className="flex flex-col w-[188px] items-start gap-[21px] absolute top-[146px] left-[184px]">
              {/* Calmness Level */}
              <div className="flex flex-col items-start gap-[18px] px-px py-0 relative self-stretch w-full">
                <div className="flex justify-between items-start relative self-stretch w-full">
                  <div className="font-semibold text-[#0000006e] text-base text-right tracking-[0.25px] leading-normal whitespace-nowrap">
                    11 Xp
                  </div>
                  <div className="w-[146px] font-normal text-black text-sm text-right tracking-[0.25px] leading-normal">
                    Уровень спокойствия
                  </div>
                </div>
                <Progress value={10} className="h-2.5 w-full bg-gray-200" />
              </div>

              {/* Energy Level */}
              <div className="flex flex-col items-start gap-[18px] px-px py-0 relative self-stretch w-full">
                <div className="flex justify-between items-start relative self-stretch w-full">
                  <div className="font-semibold text-[#0000006e] text-base text-right tracking-[0.25px] leading-normal whitespace-nowrap">
                    11 Xp
                  </div>
                  <div className="w-[146px] font-normal text-black text-sm text-right tracking-[0.25px] leading-normal">
                    Энергия
                  </div>
                </div>
                <Progress value={10} className="h-2.5 w-full bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Tasks Section */}
          <div className="flex flex-col w-[393px] items-start gap-[13px] px-[18px] py-0 absolute top-[470px] left-0.5">
            <h3 className="self-stretch font-semibold text-[#353535] text-base tracking-[0.25px] leading-normal">
              Задания для прокачки:
            </h3>
            <div className="flex items-center justify-between relative self-stretch w-full">
              <Badge
                variant="secondary"
                className="h-[38px] w-[132px] bg-colors-custom-secondary-fill rounded-lg px-3 py-[15px] font-medium text-colors-native-link-color text-xs"
              >
                Заполнить чек лист
              </Badge>
              <Badge
                variant="secondary"
                className="h-[38px] w-[210px] bg-colors-custom-secondary-fill rounded-lg px-3 py-[15px] font-medium text-colors-native-link-color text-xs"
              >
                AI помощь с прокрастинацией
              </Badge>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <footer className="absolute w-[394px] h-[107px] top-[670px] left-0">
          <Tabs defaultValue="pet" className="w-full">
            <TabsList className="flex items-center justify-between px-3 py-0 relative self-stretch w-full bg-colors-custom-surface-primary border-t-[0.5px] border-colors-custom-divider backdrop-blur-[22px]">
              <TabsTrigger
                value="pet"
                className="flex flex-col items-center justify-center gap-1.5 pt-[12px] pb-[16px] px-0 flex-1"
              >
                <div className="inline-flex min-w-16 items-center justify-center gap-1 px-2.5 py-0.5 bg-colors-custom-secondary-fill rounded-[35px]">
                  <MessageSquare className="w-6 h-6 text-colors-native-link-color" />
                </div>
                <span className="text-colors-native-link-color font-roboto-caption-1-semibold text-[13px] tracking-[0.1px] leading-[20px] font-semibold">
                  Питомец
                </span>
              </TabsTrigger>

              <TabsTrigger
                value="tasks"
                className="flex flex-col items-center justify-center gap-1.5 pt-[12px] pb-[16px] px-0 flex-1"
              >
                <div className="flex w-16 items-center justify-center gap-1.5 px-0 py-0.5">
                  <MessageSquare className="w-6 h-6 text-colors-custom-secondary-hint-color" />
                </div>
                <span className="text-colors-custom-secondary-hint-color font-roboto-caption-1-semibold text-[13px] tracking-[0.1px] leading-[20px] font-semibold">
                  Задачи
                </span>
              </TabsTrigger>

              <TabsTrigger
                value="checklist"
                className="flex flex-col items-center justify-center gap-1.5 pt-[12px] pb-[16px] px-0 flex-1"
              >
                <div className="flex w-16 items-center justify-center gap-1.5 px-0 py-0.5">
                  <MessageSquare className="w-6 h-6 text-colors-custom-secondary-hint-color" />
                </div>
                <span className="text-colors-custom-secondary-hint-color font-roboto-caption-1-semibold text-[13px] tracking-[0.1px] leading-[20px] font-semibold">
                  Чек лист
                </span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Home Indicator */}
          <div className="absolute w-[393px] h-6 top-[82px] left-0">
            <div className="relative w-[108px] h-1 top-2.5 left-[143px] bg-colors-native-text-color rounded-xl backdrop-blur-xl backdrop-brightness-[100%] opacity-90" />
          </div>
        </footer>
      </div>
    </div>
  );
}
