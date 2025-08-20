import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  Star,
  ArrowRight,
  Code,
  Briefcase,
  MessageCircle,
  FileText,
  Zap,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-full md:min-h-screen flex items-start sm:items-center justify-center px-3 xs:px-4 sm:px-6 lg:px-8 pb-8 xs:pb-8 sm:pb-0">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="transition-all duration-1000 opacity-100 translate-y-0"
          >
            <Badge className="mb-4 mt-4 xs:mb-6 bg-black text-white hover:bg-gray-800 text-xs xs:text-sm px-3 xs:px-4 py-2">
              Senior Frontend Developer • 100+ собеседований
            </Badge>

            <h1 className="text-2xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 xs:mb-8 leading-tight">
              Получи оффер в{" "}
              <span className="bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                топовую IT-компанию
              </span>{" "}
              за 5 недель
            </h1>

            <p className="text-base xs:text-xl sm:text-2xl text-gray-600 mb-8 xs:mb-12 leading-relaxed max-w-3xl mx-auto px-2 xs:px-0">
              Прокачаю твои навыки собеседований и помогу получить оффер на
              <strong className="text-black"> 350-400к рублей</strong> в месяц.
              Работал в Сбербанке и ВТБ, провел 100+ интервью.
            </p>

            <div className="flex flex-col gap-4 xs:gap-6 justify-center mb-12 xs:mb-16">
              <a
                href="https://t.me/m/85yX4E3RNzEy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-4 xs:px-8 py-4 xs:py-6 text-base xs:text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Попасть на буткемп за 39,990₽
                  <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
                </Button>
              </a>

              <a
                href="https://t.me/m/j2wkDTpOZWRi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-4 xs:px-8 py-4 xs:py-6 text-base xs:text-lg font-semibold rounded-lg transition-all duration-200"
                >
                  Консультация за 5,990₽
                </Button>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 xs:gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 opacity-100 translate-y-0"
          >
            <div className="text-center">
              <div className="text-2xl xs:text-3xl font-bold text-black mb-2">100+</div>
              <div className="text-sm xs:text-base text-gray-600">Собеседований проведено</div>
            </div>
            <div className="text-center">
              <div className="text-2xl xs:text-3xl font-bold text-black mb-2">50+</div>
              <div className="text-sm xs:text-base text-gray-600">Консультаций проведено</div>
            </div>
            <div className="text-center">
              <div className="text-2xl xs:text-3xl font-bold text-black mb-2">400k₽</div>
              <div className="text-sm xs:text-base text-gray-600">Максимальная зарплата</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Обо мне
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="mb-4 relative w-32 h-32">
                  <Image
                    src="/me.jpg"
                    alt="Матвей Клёнов"
                    fill
                    className="rounded-full border-4 border-black object-cover"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Матвей Клёнов
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Меня зовут Матвей Клёнов, я - Senior Frontend-разработчик.
                  Занимаюсь Frontend&apos;ом уже более 3-х лёт. Работал в Сбербанке и
                  ВТБ. В Сбере состоял в группе интервьюеров, что дало мне
                  большой опыт в проведении собеседований на Middle и Senior
                  позиции.
                </p>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  За плечами у меня 100+ проведённых собеседований, офферы в топ
                  компании на зарплату от 350 до 400к, 50+ проведённых
                  консультаций Middle и Senior разработчикам.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-2 hover:border-black transition-colors">
                <Briefcase className="h-12 w-12 mx-auto mb-4 text-black" />
                <h4 className="font-bold text-black mb-2">Сбербанк & ВТБ</h4>
                <p className="text-gray-600 text-sm">
                  Опыт в крупнейших банках России
                </p>
              </Card>

              <Card className="text-center p-6 border-2 hover:border-black transition-colors">
                <Users className="h-12 w-12 mx-auto mb-4 text-black" />
                <h4 className="font-bold text-black mb-2">100+ интервью</h4>
                <p className="text-gray-600 text-sm">
                  Главный интервьюер в Сбербанке
                </p>
              </Card>

              <Card className="text-center p-6 border-2 hover:border-black transition-colors">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-black" />
                <h4 className="font-bold text-black mb-2">Senior уровень</h4>
                <p className="text-gray-600 text-sm">
                  Текущая позиция и экспертиза
                </p>
              </Card>

              <Card className="text-center p-6 border-2 hover:border-black transition-colors">
                <Star className="h-12 w-12 mx-auto mb-4 text-black" />
                <h4 className="font-bold text-black mb-2">50+ консультаций</h4>
                <p className="text-gray-600 text-sm">
                  Помог десяткам разработчиков
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-black text-white text-sm px-4 py-2">
              ФЛАГМАНСКИЙ ПРОДУКТ
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-black mb-6">
              &quot;Грокаем Frontend-собеседования&quot;
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Индивидуальная подготовка к собеседованиям в топовые IT-компании.
              5 недель интенсивной работы для получения оффера мечты.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h3 className="text-2xl font-bold text-black mb-8">
                Что вас ждет:
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-full p-2 flex-shrink-0">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      1. Определяем слабые стороны
                    </h4>
                    <p className="text-gray-600">
                      Мок-собеседования для выявления пробелов в хардах и
                      софт-скилах
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-full p-2 flex-shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      2. Технические собеседования
                    </h4>
                    <p className="text-gray-600">
                      Реальная практика с детальным фидбеком и материалами для
                      изучения
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-full p-2 flex-shrink-0">
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      3. Live-кодинг сессии
                    </h4>
                    <p className="text-gray-600">
                      JavaScript, TypeScript, React + алгоритмы и структуры
                      данных
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black text-white rounded-full p-2 flex-shrink-0">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      4. Продажа себя и выход на рынок
                    </h4>
                    <p className="text-gray-600">
                      Резюме под алгоритмы HH, цепляющие письма в крупные
                      компании
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-4 xs:p-6 sm:p-8 border-2 border-black">
              <CardHeader className="text-center p-0 mb-4 xs:mb-6">
                <CardTitle className="text-2xl xs:text-3xl font-bold text-black">
                  39,990₽
                </CardTitle>
                <CardDescription className="text-base xs:text-lg text-gray-600">
                  Можно разделить на 2 платежа
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0">
                <div className="space-y-3 xs:space-y-4 mb-6 xs:mb-8">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <CheckCircle className="h-4 w-4 xs:h-5 xs:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm xs:text-base text-gray-700">
                      5 недель индивидуальной работы
                    </span>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <CheckCircle className="h-4 w-4 xs:h-5 xs:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm xs:text-base text-gray-700">
                      Мок-собеседования с фидбеком
                    </span>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <CheckCircle className="h-4 w-4 xs:h-5 xs:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm xs:text-base text-gray-700">Live-кодинг сессии</span>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <CheckCircle className="h-4 w-4 xs:h-5 xs:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm xs:text-base text-gray-700">
                      Материалы для подготовки
                    </span>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <CheckCircle className="h-4 w-4 xs:h-5 xs:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm xs:text-base text-gray-700">
                      Помощь с резюме и поиском
                    </span>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <CheckCircle className="h-4 w-4 xs:h-5 xs:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm xs:text-base text-gray-700">
                      Поддержка в течение курса
                    </span>
                  </div>
                </div>

                <a
                  href="https://t.me/y0na24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white py-4 xs:py-6 text-base xs:text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Записаться на буткемп
                    <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Consultations Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Индивидуальные консультации
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Персональная помощь по конкретным вопросам. Решаем точечные задачи
              быстро и эффективно.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center border-2 hover:border-black hover:shadow-lg transition-all duration-200">
              <Users className="h-12 w-12 mx-auto mb-4 text-black" />
              <CardTitle className="text-lg font-bold text-black mb-3">
                Тренировочное собеседование
              </CardTitle>
              <CardDescription className="text-gray-600">
                Мок-интервью как в крупных компаниях с детальным разбором
              </CardDescription>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-black hover:shadow-lg transition-all duration-200">
              <Award className="h-12 w-12 mx-auto mb-4 text-black" />
              <CardTitle className="text-lg font-bold text-black mb-3">
                Roadmap до Senior
              </CardTitle>
              <CardDescription className="text-gray-600">
                Персональный план развития с конкретными шагами и ресурсами
              </CardDescription>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-black hover:shadow-lg transition-all duration-200">
              <FileText className="h-12 w-12 mx-auto mb-4 text-black" />
              <CardTitle className="text-lg font-bold text-black mb-3">
                Написание резюме
              </CardTitle>
              <CardDescription className="text-gray-600">
                Составление резюме под алгоритмы HeadHunter для максимальных
                откликов
              </CardDescription>
            </Card>

            <Card className="p-6 text-center border-2 hover:border-black hover:shadow-lg transition-all duration-200">
              <Code className="h-12 w-12 mx-auto mb-4 text-black" />
              <CardTitle className="text-lg font-bold text-black mb-3">
                Решение рабочих задач
              </CardTitle>
              <CardDescription className="text-gray-600">
                Помощь с конкретными техническими вызовами в проектах
              </CardDescription>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm xs:max-w-md mx-auto border-2 border-black">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-black mb-3 xs:mb-4">5,990₽</div>
              <div className="text-gray-600 mb-4 xs:mb-6 text-sm xs:text-base sm:text-lg">за 1 час консультации</div>

              <a
                href="https://t.me/m/j2wkDTpOZWRi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  size="lg"
                  className="w-full bg-black hover:bg-gray-800 text-white px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-6 text-sm xs:text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Записаться на консультацию
                  <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Отзывы клиентов
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  И
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">Илья</h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Обратился к Матвею за консультацией по вопросу роста с мидла до
                синьора. Удивила вовлеченность в процесс менторства и
                индивидуальный подход. По рекомендации от Матвея попал на собес
                в WB. Получил очень важную информацию для дальнейшего пути
                развития. Спасибо!&quot;
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  Е
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">Евгений</h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Матвей провёл хорошую консультацию по построению архитектуры,
                стало всё гораздо понятнее. Рассмотрели реальные примеры с моей
                работы, разобрали, нашли моменты для улучшения. Вместо 1 часа,
                просидели 2.5, за что огромное спасибо!&quot;
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  А
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">Андрей</h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Матвей круто раскидал по feature based архитектуре, а также как
                применять DI в реальных проектах. Наконец-то понял, что это и
                зачем на практике! Получил суперский гайд по web3. Чел глубоко
                шарит во фронте и не только 💪&quot;
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  Е
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">Елизавета</h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Недавно проходила моковый собес у Матвея, было очень круто!
                Вопросы как на реальных собеседованиях. После собеса подробно
                объяснил все затруднившие моменты, скинул много ссылок с
                информацией. Всем довольна, Матвею еще раз спасибо!&quot;
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  Д
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">Дмитрий</h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                &quot;Брал у Матвея консультацию по FSD и стейт-менеджменту. Матвей
                объяснил основные концепции FSD, после чего все стало в разы
                понятнее. Рассказал подходы к разработке на разных
                стейт-менеджерах. Всё сопровождалось визуализацией в excalidraw.
                Всем рекомендую!&quot;
              </p>
            </Card>

            <Card className="p-6 border-2 hover:border-black hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                  А
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-black">Анонимный</h4>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Обратился за помощью к Матвею. Он быстро вник в суть проблемы, и
                мы начали детально разбирать её до мелочей. В ходе консультации
                я вспомнил базовые концепции, а результат полностью оправдал мои
                ожидания. Очень рекомендую!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-3 xs:px-0">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-bold mb-6 xs:mb-8">
            Готов изменить свою карьеру?
          </h2>
          <p className="text-base xs:text-xl text-gray-300 mb-8 xs:mb-12 max-w-2xl mx-auto px-2 xs:px-0">
            Не откладывай на завтра то, что может изменить твою жизнь уже
            сегодня. Первый шаг к оффер мечты начинается здесь.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 xs:gap-6 justify-center">
            <a
              href="https://t.me/m/85yX4E3RNzEy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-black px-4 xs:px-8 py-4 xs:py-6 text-base xs:text-lg font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Буткемп &quot;Грокаем Frontend&quot;<span className="hidden sm:inline"> - 39,990₽</span>
                <ArrowRight className="ml-2 h-4 w-4 xs:h-5 xs:w-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
